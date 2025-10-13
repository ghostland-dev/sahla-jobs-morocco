import { Button } from "@/components/ui/button";
import { Briefcase, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            فرص عمل
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            الرئيسية
          </a>
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            الوظائف
          </a>
          <a href="/companies" className="text-sm font-medium hover:text-primary transition-colors">
            للشركات
          </a>
          <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            من نحن
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            اتصل بنا
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => window.location.href = "/auth"}
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">تسجيل الدخول</span>
          </Button>
          <Button 
            className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
            onClick={() => window.location.href = "/companies"}
          >
            انشر وظيفة
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
