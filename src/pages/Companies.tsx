import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Users, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const Companies = () => {
  const benefits = [
    "الوصول إلى آلاف المرشحين المؤهلين",
    "نشر وظائف غير محدودة",
    "أدوات بحث متقدمة عن المواهب",
    "لوحة تحكم لإدارة الطلبات",
    "دعم فني متخصص",
    "تقارير وإحصائيات مفصلة"
  ];

  const stats = [
    { icon: Users, value: "١٠,٠٠٠+", label: "مرشح نشط" },
    { icon: Building2, value: "٥٠٠+", label: "شركة موثوقة" },
    { icon: Target, value: "٩٥٪", label: "نسبة التوظيف" },
    { icon: TrendingUp, value: "٢,٠٠٠+", label: "وظيفة شهرياً" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">وظف أفضل المواهب</h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              انضم إلى أكثر من ٥٠٠ شركة تستخدم فرص عمل للعثور على أفضل المواهب في المغرب
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all text-lg px-8"
            >
              ابدأ الآن مجاناً
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-border/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">لماذا تختار فرص عمل؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 border-border/50 hover:shadow-elegant transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg font-medium">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Job Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 border-border/50">
            <h2 className="text-3xl font-bold mb-6 text-center">انشر وظيفة</h2>
            <p className="text-center text-muted-foreground mb-8">
              املأ النموذج أدناه وسيتواصل معك فريقنا خلال ٢٤ ساعة
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company-name">اسم الشركة *</Label>
                  <Input
                    id="company-name"
                    placeholder="اسم شركتك"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company-email">البريد الإلكتروني *</Label>
                  <Input
                    id="company-email"
                    type="email"
                    placeholder="company@email.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+212 6XX XXX XXX"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company-size">حجم الشركة *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="اختر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">١-١٠ موظفين</SelectItem>
                      <SelectItem value="11-50">١١-٥٠ موظف</SelectItem>
                      <SelectItem value="51-200">٥١-٢٠٠ موظف</SelectItem>
                      <SelectItem value="201+">٢٠١+ موظف</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="job-title">عنوان الوظيفة *</Label>
                <Input
                  id="job-title"
                  placeholder="مثال: مطور ويب Full Stack"
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="location">الموقع *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casablanca">الدار البيضاء</SelectItem>
                      <SelectItem value="rabat">الرباط</SelectItem>
                      <SelectItem value="marrakech">مراكش</SelectItem>
                      <SelectItem value="fes">فاس</SelectItem>
                      <SelectItem value="tangier">طنجة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="job-type">نوع الوظيفة *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="اختر النوع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">دوام كامل</SelectItem>
                      <SelectItem value="part-time">دوام جزئي</SelectItem>
                      <SelectItem value="contract">عقد</SelectItem>
                      <SelectItem value="internship">تدريب</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">وصف الوظيفة *</Label>
                <Textarea
                  id="description"
                  placeholder="اكتب وصفاً تفصيلياً للوظيفة..."
                  required
                  className="mt-1 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-elegant transition-all"
                size="lg"
              >
                إرسال الطلب
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                بإرسال هذا النموذج، أنت توافق على{" "}
                <a href="#" className="text-primary hover:underline">
                  شروط الخدمة
                </a>
              </p>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Companies;
