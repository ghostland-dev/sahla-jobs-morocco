import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "رؤيتنا",
      description: "أن نكون المنصة الأولى للتوظيف في المغرب والعالم العربي"
    },
    {
      icon: Heart,
      title: "مهمتنا",
      description: "ربط المواهب المغربية بأفضل فرص العمل المتاحة"
    },
    {
      icon: Shield,
      title: "قيمنا",
      description: "الشفافية، الجودة، والالتزام بخدمة الباحثين عن عمل"
    }
  ];

  const stats = [
    { icon: Users, value: "١٠,٠٠٠+", label: "مستخدم نشط" },
    { icon: TrendingUp, value: "٢,٠٠٠+", label: "وظيفة منشورة شهرياً" },
    { icon: Award, value: "٩٥٪", label: "نسبة رضا المستخدمين" },
    { icon: Target, value: "٥٠٠+", label: "شركة شريكة" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            فرص عمل هي المنصة الرائدة في مجال التوظيف بالمغرب، نربط المواهب المغربية 
            بأفضل الفرص الوظيفية في مختلف القطاعات
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-12 border-border/50 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">قصتنا</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                بدأت فرص عمل في عام ٢٠٢٣ برؤية واضحة: تسهيل عملية البحث عن العمل في المغرب 
                وجعلها أكثر فعالية وشفافية. نحن نؤمن بأن كل شخص يستحق فرصة للعثور على الوظيفة المناسبة 
                التي تتوافق مع مهاراته وطموحاته.
              </p>
              <p>
                منذ إطلاقنا، ساعدنا آلاف الباحثين عن عمل في العثور على فرص وظيفية مناسبة، 
                وساعدنا مئات الشركات في العثور على المواهب المناسبة لتنمية أعمالهم.
              </p>
              <p>
                نحن نعمل باستمرار على تحسين منصتنا وإضافة ميزات جديدة لجعل تجربة البحث عن العمل 
                والتوظيف أفضل لجميع المستخدمين.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">قيمنا ومبادئنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border-border/50 hover:shadow-elegant transition-all">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">إنجازاتنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلينا اليوم</h2>
          <p className="text-xl mb-8 text-white/90">
            ابدأ رحلتك المهنية مع فرص عمل واكتشف آلاف الفرص الوظيفية
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:shadow-glow transition-all">
            إنشاء حساب مجاني
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
