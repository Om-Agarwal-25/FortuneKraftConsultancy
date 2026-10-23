"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Check, ExternalLink, Star } from "lucide-react";
import type { Service } from "@/types";
import type { CleanPlan, CleanProgram } from "@/app/api/get-all-services/route";

interface PremiumPlanCardProps {
  service: Service;
  realPlan: CleanPlan | null;
  realProgram: CleanProgram | null;
  isLoadingPrices: boolean;
  onBuyClick: (plan: CleanPlan | null) => void;
  onDescriptionClick: () => void;
}

export default function PremiumPlanCard({
  service,
  realPlan,
  realProgram,
  isLoadingPrices,
  onBuyClick,
  onDescriptionClick,
}: PremiumPlanCardProps): JSX.Element {
  const paidPlans = useMemo(
    () =>
      [...(realProgram?.pricing ?? [])]
        .filter((plan) => !plan.trialPack)
        .sort((a, b) => a.finalPrice - b.finalPrice),
    [realProgram],
  );
  const hasPlanToggle = paidPlans.length >= 2;
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(
    realPlan?.planId ?? null,
  );

  useEffect(() => {
    setSelectedPlanId(realPlan?.planId ?? null);
  }, [realPlan?.planId]);

  const selectedPlan =
    (selectedPlanId
      ? paidPlans.find((plan) => plan.planId === selectedPlanId)
      : undefined) ??
    realPlan ??
    (hasPlanToggle ? paidPlans[0] : null) ??
    null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full mb-10 rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A1628 0%, #1a3a5c 60%, #0A1628 100%)",
        border: "2px solid rgba(240,165,0,0.6)",
        boxShadow:
          "0 0 40px rgba(240,165,0,0.15), 0 20px 60px rgba(10,22,40,0.4)",
      }}
    >
      {/* Subtle diagonal gold pattern overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(240,165,0,0.03) 0px, rgba(240,165,0,0.03) 2px, transparent 2px, transparent 12px)",
        }}
      />

      {/* Gold glow orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-[0.06] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold opacity-[0.04] rounded-full blur-[60px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* FEATURED badge — top center ribbon */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
        <div
          className="hidden md:flex items-center gap-1.5 px-5 py-1.5 rounded-b-xl text-navy text-xs font-bold tracking-widest uppercase shadow-lg"
          style={{
            background: "linear-gradient(90deg, #F0A500, #FFD166, #F0A500)",
          }}
        >
          <Crown size={12} />
          Featured — All Services Included
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 pt-12 md:p-8 md:pt-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          {/* Left — title and description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #F0A500, #FFD166)",
                }}
              >
                <Crown size={18} className="text-navy" />
              </div>
              <div className="min-w-0">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest">
                  Premium Plan
                </p>
                <h3 className="font-display text-white text-xl md:text-2xl font-bold leading-tight">
                  All Services Bundle
                </h3>
              </div>
            </div>

            <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed mb-5 max-w-xl">
              {service.description}
            </p>

            {/* Features grid — 1 col on mobile, 2 on sm, 3 on md */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(240,165,0,0.2)",
                      border: "1px solid rgba(240,165,0,0.5)",
                    }}
                  >
                    <Check size={10} className="text-gold" />
                  </div>
                  <span className="text-white/80 text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — price and CTA — full width on mobile, fixed width on desktop */}
          <div
            className="w-full lg:w-[240px] xl:w-[260px] flex-shrink-0 rounded-xl p-5 md:p-6 text-center"
            style={{
              background: "rgba(240,165,0,0.08)",
              border: "1px solid rgba(240,165,0,0.2)",
            }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>

            {hasPlanToggle && (
              <div
                className="flex flex-wrap justify-center gap-1 mb-4 p-1 rounded-full"
                style={{ background: "rgba(10,22,40,0.45)" }}
                aria-label="Premium plan duration"
              >
                {paidPlans.map((plan) => (
                  <button
                    key={plan.planId}
                    type="button"
                    aria-pressed={selectedPlan?.planId === plan.planId}
                    onClick={() => setSelectedPlanId(plan.planId)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      selectedPlan?.planId === plan.planId
                        ? "bg-gold text-navy"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {plan.displayDuration}
                  </button>
                ))}
              </div>
            )}

            {/* Price */}
            {isLoadingPrices ? (
              <div className="h-10 w-32 bg-white/10 animate-pulse rounded-lg mx-auto mb-4" />
            ) : selectedPlan ? (
              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-2 flex-wrap">
                  <span className="font-display text-3xl md:text-4xl text-gold font-bold">
                    ₹{selectedPlan.finalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                {selectedPlan.gstApplied && (
                  <p className="text-white/40 text-xs mt-0.5">
                    Incl. {selectedPlan.gstPercentage}% GST
                  </p>
                )}
                {selectedPlan.discountPercent > 0 && (
                  <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
                    <span className="text-white/40 text-sm line-through">
                      ₹
                      {(selectedPlan.gstApplied
                        ? Math.round(
                            selectedPlan.actualPrice *
                              (1 + selectedPlan.gstPercentage / 100),
                          )
                        : selectedPlan.actualPrice
                      ).toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs bg-gold/20 text-gold font-semibold px-2 py-0.5 rounded-full">
                      {selectedPlan.discountPercent}% OFF
                    </span>
                  </div>
                )}
                {selectedPlan.displayDuration && (
                  <p className="text-white/50 text-xs mt-1">
                    {selectedPlan.displayDuration} plan
                  </p>
                )}
              </div>
            ) : (
              <div className="mb-4">
                <span className="font-display text-3xl text-gold font-bold">
                  {service.price}
                </span>
              </div>
            )}

            {/* Buttons */}
            <button
              onClick={() => onBuyClick(selectedPlan)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-navy text-sm mb-3 hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg, #F0A500, #FFD166)" }}
            >
              Get Premium <ExternalLink size={14} />
            </button>
            <button
              onClick={onDescriptionClick}
              className="w-full py-3 rounded-xl font-semibold text-white/80 text-sm border border-white/20 hover:bg-white/5 transition-colors"
            >
              View Description
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
