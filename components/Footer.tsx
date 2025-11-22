import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-black text-yellow-500 mb-6">DZ Heavy Sim</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            نحن رواد التدريب المهني في مجال الآلات الثقيلة في الجزائر. نلتزم بأعلى معايير السلامة والجودة لتخريج جيل محترف.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:bg-slate-800 transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-slate-800 transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-yellow-500 transition">الرئيسية</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">التخصصات المتاحة</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">عن الأكاديمية</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">الأسئلة الشائعة</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-white font-bold mb-6">التخصصات</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-yellow-500 transition">مشغل حفارة (Excavator)</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">مشغل جرافة (Bulldozer)</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">رافعة شوكية (Forklift)</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">الرافعات البرجية</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">اتصل بنا</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                                <span>المنطقة الصناعية الرويبة، الجزائر العاصمة، الجزائر</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-yellow-500 flex-shrink-0" />
                                <span dir="ltr">+213 550 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-yellow-500 flex-shrink-0" />
                                <span>info@dzheavysim.dz</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; 2024 DZ Heavy Sim Academy. جميع الحقوق محفوظة.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">سياسة الخصوصية</a>
                        <a href="#" className="hover:text-white">شروط الاستخدام</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
