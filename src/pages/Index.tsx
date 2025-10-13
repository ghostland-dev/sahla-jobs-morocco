import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSection from "@/components/FilterSection";
import JobCard from "@/components/JobCard";
import { Briefcase, TrendingUp, Users, Building2 } from "lucide-react";

const Index = () => {
  const featuredJobs = [
    {
      title: "مطور ويب Full Stack",
      company: "TechMorocco",
      location: "الدار البيضاء",
      type: "دوام كامل",
      salary: "١٥,٠٠٠ - ٢٥,٠٠٠ درهم",
      postedTime: "منذ ساعتين",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "مدير تسويق رقمي",
      company: "Digital Agency MA",
      location: "الرباط",
      type: "دوام كامل",
      salary: "١٢,٠٠٠ - ٢٠,٠٠٠ درهم",
      postedTime: "منذ ٥ ساعات",
      tags: ["SEO", "Social Media", "Google Ads"]
    },
    {
      title: "محاسب قانوني",
      company: "Finance Group",
      location: "مراكش",
      type: "دوام كامل",
      salary: "١٠,٠٠٠ - ١٥,٠٠٠ درهم",
      postedTime: "منذ يوم واحد",
      tags: ["SAGE", "Excel", "Fiscalité"]
    },
    {
      title: "مصمم UI/UX",
      company: "Creative Studio",
      location: "طنجة",
      type: "دوام جزئي",
      salary: "٨,٠٠٠ - ١٢,٠٠٠ درهم",
      postedTime: "منذ يومين",
      tags: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      title: "مهندس بيانات",
      company: "Data Solutions",
      location: "الدار البيضاء",
      type: "دوام كامل",
      salary: "١٨,٠٠٠ - ٣٠,٠٠٠ درهم",
      postedTime: "منذ ٣ ساعات",
      tags: ["Python", "SQL", "Machine Learning"]
    },
    {
      title: "مدرس لغة إنجليزية",
      company: "International School",
      location: "فاس",
      type: "دوام كامل",
      salary: "٧,٠٠٠ - ١٠,٠٠٠ درهم",
      postedTime: "منذ ٤ ساعات",
      tags: ["TEFL", "IELTS", "Cambridge"]
    }
  ];

  const stats = [
    {
      icon: Briefcase,
      value: "٢,٤٥٠",
      label: "وظيفة متاحة",
      color: "text-primary"
    },
    {
      icon: Building2,
      value: "٥٢٠",
      label: "شركة موثوقة",
      color: "text-secondary"
    },
    {
      icon: Users,
      value: "٨,٣٠٠",
      label: "موظف تم تعيينه",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      value: "٩٥٪",
      label: "نسبة النجاح",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary mb-3`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">أحدث الوظائف</h2>
            <p className="text-muted-foreground">استكشف آلاف الفرص الوظيفية المتاحة</p>
          </div>

          <FilterSection />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-elegant transition-all">
              عرض المزيد من الوظائف
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">فرص عمل</span>
              </div>
              <p className="text-muted-foreground text-sm">
                منصة التوظيف الأولى في المغرب
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">الوظائف</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الشركات</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">اتصل بنا</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">للباحثين عن عمل</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">إنشاء حساب</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">تحميل السيرة الذاتية</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">تنبيهات الوظائف</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">نصائح مهنية</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">للشركات</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">نشر وظيفة</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">البحث عن مرشحين</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الأسعار</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الدعم</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © ٢٠٢٥ فرص عمل. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
