"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Service } from "@/types";

import type { CleanProgram, CleanPlan } from "@/app/api/get-all-services/route";

interface ServiceCardProps {
  service: Service;
  realPlan: CleanPlan | null;
  realProgram: CleanProgram | null;
  isLoadingPrices: boolean;
  onDescriptionClick: (service: Service) => void;
  onBuyClick: (service: Service) => void;
  index: number;
}

export default function ServiceCard({
  service,
  realPlan,
  isLoadingPrices,
  onDescriptionClick,
  onBuyClick,
}: ServiceCardProps): JSX.Element {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(10,22,40,0.10)] overflow-hidden flex flex-col border border-transparent hover:border-gold/30 transition-colors"
    >
      {/* Dynamic Top Strip */}
      {service.title.startsWith('Intraday') && <div className="h-2 w-full bg-gold" />}
      {service.title.startsWith('BTST') && <div className="h-2 w-full bg-[#FFD166]" />}
      {service.title.startsWith('Positional') && <div className="h-2 w-full bg-[#1a3a5c] border-t border-gold" />}

      {/* Top Banner section */}
      <div
        className="bg-navy p-6 relative"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(240,165,0,0.03) 0px, rgba(240,165,0,0.03) 2px, transparent 2px, transparent 10px)",
        }}
      >
        {service.tag && (
          <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none">
            <div className="absolute top-[28px] -right-[28px] w-[140px] bg-gold text-navy text-[10px] uppercase font-bold text-center py-1 transform rotate-45 shadow-md">
              {service.tag}
            </div>
          </div>
        )}
        <div className="inline-block bg-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-navy mb-4">
          {service.title.split(' — ')[0]}
        </div>
        <h3 className="text-white font-display text-2xl font-bold mb-1 mr-8">
          {service.title}
        </h3>
        <p className="text-gold/80 text-sm">{service.duration}</p>
      </div>

      {/* Body section */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Price display */}
        <div className="mb-6">
          {isLoadingPrices ? (
            <div className="h-10 w-32 bg-gray-100 animate-pulse rounded-lg" />
          ) : realPlan ? (
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-navy font-bold">
                  ₹{realPlan.finalPrice.toLocaleString('en-IN')}
                </span>
                {realPlan.discountPercent > 0 && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{(realPlan.gstApplied
                      ? Math.round(realPlan.actualPrice * (1 + realPlan.gstPercentage / 100))
                      : realPlan.actualPrice
                    ).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              {realPlan.gstApplied && (
                <p className="text-gray-400 text-xs mt-0.5">Incl. {realPlan.gstPercentage}% GST</p>
              )}
              {realPlan.discountPercent > 0 && (
                <span className="text-xs bg-gold/20 text-gold-dark font-semibold px-2 py-0.5 rounded-full inline-block mt-2">
                  {realPlan.discountPercent}% OFF
                </span>
              )}
            </div>
          ) : (
            <span className="font-display text-3xl text-navy font-bold">{service.price}</span>
          )}
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-navy/80">
              <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="space-y-3 mt-auto">
          <button
            onClick={() => onBuyClick(service)}
            className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-3.5 rounded-xl transition-colors text-sm"
          >
            Buy Now
          </button>
          <button
            onClick={() => onDescriptionClick(service)}
            className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
          >
            View Description
          </button>
        </div>
      </div>
    </motion.div>
  );
}
