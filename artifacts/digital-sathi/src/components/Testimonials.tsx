import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus, AlertTriangle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reviewSchema = z.object({
  clientName: z.string().min(2, { message: "Please enter your name." }),
  businessName: z.string().min(2, { message: "Please enter your business name." }),
  rating: z.number().min(1, { message: "Please select a rating." }).max(5),
  reviewMessage: z.string().min(10, { message: "Please write at least 10 characters." }),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

type ApprovedReview = {
  id: number;
  client_name: string;
  business_name: string;
  rating: number;
  review: string;
  created_at: string;
};

const starLabels = ["Very poor", "Needs improvement", "Good", "Great", "Excellent"];
const localStorageKey = "digitalSaathiPendingReviews";

const demoApprovedReviews: ApprovedReview[] = [
  {
    id: 1,
    client_name: "Neha Sharma",
    business_name: "Local Fitness Studio",
    rating: 5,
    review: "DigitalSaathi helped us attract more clients with a clean website and local search strategy.",
    created_at: "2026-06-01T08:00:00Z",
  },
  {
    id: 2,
    client_name: "Amit Verma",
    business_name: "Organic Café",
    rating: 5,
    review: "The new website looks professional, and the support team made the launch easy.",
    created_at: "2026-06-03T10:30:00Z",
  },
  {
    id: 3,
    client_name: "Priya Singh",
    business_name: "Boutique Agency",
    rating: 4,
    review: "Great communication and timely delivery. The site now reflects our brand beautifully.",
    created_at: "2026-06-04T14:15:00Z",
  },
];

export default function Testimonials() {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<ApprovedReview[]>([]);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [reviewCount, setReviewCount] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      clientName: "",
      businessName: "",
      rating: 0,
      reviewMessage: "",
    },
  });

  const selectedRating = form.watch("rating");

  useEffect(() => {
    setLoadingReviews(true);
    setReviews(demoApprovedReviews);
    setReviewCount(demoApprovedReviews.length);
    if (demoApprovedReviews.length > 0) {
      const total = demoApprovedReviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating(Number((total / demoApprovedReviews.length).toFixed(1)));
    } else {
      setAverageRating(null);
    }
    setLoadingReviews(false);
  }, []);

  const savePendingReview = (values: ReviewFormValues) => {
    if (typeof window === "undefined") {
      return;
    }

    const pendingReviews = JSON.parse(localStorage.getItem(localStorageKey) ?? "[]");
    const newPendingReview = {
      id: Date.now(),
      client_name: values.clientName,
      business_name: values.businessName,
      rating: values.rating,
      review: values.reviewMessage,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    localStorage.setItem(localStorageKey, JSON.stringify([...pendingReviews, newPendingReview]));
  };

  const onSubmit = async (values: ReviewFormValues) => {
    setIsSubmitting(true);
    savePendingReview(values);
    setIsSubmitting(false);

    toast({
      title: "Review submitted",
      description: "Your review has been saved locally and is pending approval.",
    });

    form.reset();
    setFormOpen(false);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Client Reviews</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Local Businesses</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Submit your review and help us build better AI automation and digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[360px_1fr] items-start">
          <div className="space-y-6">
            <div className="glass-panel border border-border bg-background/90 p-8 rounded-[2rem] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Average Rating</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, index) => {
                        const roundedRating = Math.round(averageRating ?? 0);
                        return (
                          <Star
                            key={index}
                            className={index < roundedRating ? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-muted-foreground/30"}
                          />
                        );
                      })}
                    </div>
                    <div className="text-3xl font-black">
                      {averageRating ? averageRating.toFixed(1) : "0.0"}
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-primary/10 px-4 py-3 text-primary font-semibold">
                  {reviewCount} approved {reviewCount === 1 ? "review" : "reviews"}
                </div>
              </div>

              <p className="text-muted-foreground leading-7">
                Only approved reviews are shown on this website. Submitted reviews enter a pending approval queue before they appear publicly.
              </p>
            </div>

            <div className="glass-panel border border-border bg-background/90 p-8 rounded-[2rem] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Leave a Review</h3>
                  <p className="text-muted-foreground mt-2">Share your experience with DigitalSaathi.</p>
                </div>
                <Button size="lg" onClick={() => setFormOpen((open) => !open)}>
                  <Plus className="w-4 h-4" />
                  {formOpen ? "Close" : "Leave a Review"}
                </Button>
              </div>

              {formOpen ? (
                <div className="mt-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="clientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Client Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your business" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Rating</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-2">
                                {Array.from({ length: 5 }, (_, index) => {
                                  const value = index + 1;
                                  return (
                                    <button
                                      key={value}
                                      type="button"
                                      onClick={() => field.onChange(value)}
                                      className={`rounded-full p-2 transition-colors ${
                                        value <= field.value ? "bg-primary/10 text-primary" : "bg-muted"
                                      }`}
                                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                                    >
                                      <Star className="w-5 h-5" />
                                    </button>
                                  );
                                })}
                              </div>
                            </FormControl>
                            <FormMessage />
                            <p className="mt-2 text-sm text-muted-foreground">{starLabels[field.value - 1] ?? "Select a rating"}</p>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="reviewMessage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Review Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your experience..." {...field} className="min-h-[140px]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Review"}
                      </Button>
                    </form>
                  </Form>
                </div>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-background/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold">Approved Reviews</h3>
                {loadingReviews ? (
                  <span className="text-sm text-muted-foreground">Loading...</span>
                ) : null}
              </div>

              {reviews.length === 0 && !loadingReviews ? (
                <div className="rounded-3xl border border-dashed border-muted p-8 text-center text-muted-foreground">
                  <AlertTriangle className="mx-auto mb-4 h-10 w-10 text-primary/90" />
                  <p className="text-lg font-semibold">No approved reviews yet.</p>
                  <p className="mt-2">Submit your feedback and it will appear once approved.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="glass-panel border border-border p-6 rounded-[2rem]">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="text-xl font-bold">{review.client_name}</h4>
                          <p className="text-muted-foreground">{review.business_name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              key={index}
                              className={index < review.rating ? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-muted-foreground/40"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground leading-7">"{review.review}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
