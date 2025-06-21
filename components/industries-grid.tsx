"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Car,
  Leaf,
  Wheat,
  CreditCard,
  Coffee,
  Heart,
  Laptop,
  ShoppingCart,
  Stethoscope,
  Wrench,
  GraduationCap,
  Building,
  MapPin,
  Shirt,
  Settings,
} from "lucide-react"

export function IndustriesGrid() {
  const industries = [
    { name: "AI", icon: <Brain className="h-8 w-8" /> },
    { name: "EV", icon: <Car className="h-8 w-8" /> },
    { name: "Renewable Energy", icon: <Leaf className="h-8 w-8" /> },
    { name: "Agriculture", icon: <Wheat className="h-8 w-8" /> },
    { name: "Finance", icon: <CreditCard className="h-8 w-8" /> },
    { name: "Food & Beverages", icon: <Coffee className="h-8 w-8" /> },
    { name: "Beauty & Wellness", icon: <Heart className="h-8 w-8" /> },
    { name: "Tech", icon: <Laptop className="h-8 w-8" /> },
    { name: "E-commerce", icon: <ShoppingCart className="h-8 w-8" /> },
    { name: "Healthcare", icon: <Stethoscope className="h-8 w-8" /> },
    { name: "Automobiles", icon: <Wrench className="h-8 w-8" /> },
    { name: "Education", icon: <GraduationCap className="h-8 w-8" /> },
    { name: "Real Estate", icon: <Building className="h-8 w-8" /> },
    { name: "Tourism", icon: <MapPin className="h-8 w-8" /> },
    { name: "Fashion", icon: <Shirt className="h-8 w-8" /> },
    { name: "Services", icon: <Settings className="h-8 w-8" /> },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {industries.map((industry, index) => (
        <motion.div
          key={industry.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
        >
          <div className="text-primary mb-2">{industry.icon}</div>
          <span className="text-sm font-medium">{industry.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
