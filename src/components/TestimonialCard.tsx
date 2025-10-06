import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Define the props for the component
interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div 
        className="relative mb-12 p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
        whileHover={{ 
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <Quote className="w-12 h-12 mx-auto text-primary/20 absolute -top-6 left-1/2 transform -translate-x-1/2" />
        
        <motion.p 
          className="text-xl md:text-2xl font-medium text-white/90 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          `"{testimonial.content}"`
        </motion.p>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-bold text-lg text-primary">{testimonial.name}</h4>
          {testimonial.company && <p className="text-muted-foreground">{testimonial.company}</p>}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
