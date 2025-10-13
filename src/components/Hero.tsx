import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="مكتب عمل حديث"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ابحث عن وظيفة أحلامك
            <span className="block text-accent mt-2">في المغرب</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            آلاف الفرص الوظيفية تنتظرك في أفضل الشركات المغربية
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all text-lg px-8 gap-2"
            >
              استكشف الوظائف
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all text-lg px-8"
            >
              للشركات
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">٥٠٠+</div>
              <div className="text-white/80">شركة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">٢٠٠٠+</div>
              <div className="text-white/80">وظيفة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">١٠٠٠+</div>
              <div className="text-white/80">موظف</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
