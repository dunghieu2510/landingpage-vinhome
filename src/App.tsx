/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ZoomIn, Globe, Share2 } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // TODO: Thay thế chuỗi bên dưới bằng Web App URL của bạn sau khi deploy App Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzpF2IPjjxOcZjTNdLDvVt-YXiWb0Q39H97lg0v8U7hnpKJJ_5YZUPRddPGoksJoGA1/exec";

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === "YOUR_WEB_APP_URL_HERE") {
      alert("Vui lòng cập nhật GOOGLE_SCRIPT_URL trong mã nguồn (mở file App.tsx dòng 24) với URL của Web App bạn vừa tạo!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Quan trọng khi gọi đến Google Forms/Scripts từ các nguồn khác
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitMessage("Cảm ơn bạn! Thông tin đã được ghi nhận.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Header / TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-slate-900/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-4 max-w-full mx-auto font-headline font-semibold tracking-tight glass-nav">
        <div className="text-xl font-bold text-[#004147] dark:text-white">
          Vinhomes Cần Giờ
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-[#835400] border-b-2 border-[#835400] pb-1 hover:text-[#835400] transition-colors duration-300 scale-95 active:opacity-80 transition-transform"
            href="#"
          >
            Tổng quan
          </a>
          <a
            className="text-[#004147] dark:text-[#f7f9ff] opacity-80 hover:text-[#835400] transition-colors duration-300 scale-95 active:opacity-80 transition-transform"
            href="#"
          >
            Vị trí
          </a>
          <a
            className="text-[#004147] dark:text-[#f7f9ff] opacity-80 hover:text-[#835400] transition-colors duration-300 scale-95 active:opacity-80 transition-transform"
            href="#"
          >
            Tiện ích
          </a>
          <a
            className="text-[#004147] dark:text-[#f7f9ff] opacity-80 hover:text-[#835400] transition-colors duration-300 scale-95 active:opacity-80 transition-transform"
            href="#"
          >
            Mặt bằng
          </a>
          <a
            className="text-[#004147] dark:text-[#f7f9ff] opacity-80 hover:text-[#835400] transition-colors duration-300 scale-95 active:opacity-80 transition-transform"
            href="#"
          >
            Chính sách
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="hidden lg:block text-[#004147] font-bold border-2 border-[#004147] px-4 py-2 hover:bg-[#004147] hover:text-white transition-all"
            href="tel:0981766498"
          >
            Hotline: 0981766498
          </a>
          <a
            className="bg-secondary text-on-secondary px-6 py-2 shadow-sm font-bold scale-95 active:opacity-80 transition-transform"
            href="#"
          >
            Zalo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Vinhomes Cần Giờ Panorama"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAauXQ2s8W05q_wJjzyPwAqK_KyINwZCkAEBDFe6fXWfVe531wDWLgFUAeKDsNmY7iYsnypqpx8rJuVjCMUCbu5FJKbrtLA892brOav9KKphryrpDkl6nvsKCafxH5W7kshwly6wi-8OF_dif5dyiZBNfQU3eD_oJpKkm6eGVg0T8PdDKD8NWRntny7Z4-Zj1qYydBQJRjHxM_V9HuTuar_KtA7BZT7xFw5HCkhRtAkASCOjITFLMggTDRO3wkEyWP3SufzbsHzL8c"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 px-6 md:px-24 max-w-4xl">
          <span className="inline-block text-secondary font-label font-bold uppercase tracking-[0.2em] mb-4 text-sm mt-16 md:mt-0">
            Kiệt tác nghỉ dưỡng ven biển
          </span>
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-primary leading-tight tracking-tighter mb-8">
            Vinhomes Cần Giờ - Đô Thị Nghỉ Dưỡng Tầm Cỡ Quốc Tế
          </h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-secondary text-on-secondary px-10 py-5 font-bold text-lg hover:brightness-110 transition-all shadow-xl cursor-pointer">
              NHẬN THÔNG TIN CHI TIẾT
            </button>
            <button className="text-on-primary border-b-2 border-secondary py-5 font-bold text-lg hover:text-secondary transition-all cursor-pointer">
              KHÁM PHÁ VỊ TRÍ
            </button>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="py-32 px-6 md:px-24 bg-surface flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              alt="Coastal Architecture"
              className="w-full aspect-[4/5] object-cover shadow-2xl relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf0V-KS93VcLUeLvQIXhJ4nFT-mFT3vtUOD34ynY1LoFzt3s5mhqvzSsaYIlAd30syRWIgqrHqljwvjn9wJKvS3K4q5OOfONo3MdGIsG9sIClQskT3y9X4vBXtPEM7YEr_5ULbNXTNVyGOsuW9jgeMzpAuBBT7o0ovI3PQRSRF6eu53vGmgdrmnEy1TeMotOpSvF9f4wosW1IlBAx1H1eleC9RE6oTIUEWPdMu2JG_LMXujlZq5yrNYnb8trtDpxRrsyehanaX_cI"
            />
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary-container -z-0"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <span className="text-secondary font-label font-bold uppercase tracking-widest text-xs mb-4 block">
            Tổng quan dự án
          </span>
          <h2 className="font-headline font-bold text-4xl text-primary mb-8 leading-snug">
            Vị thế độc tôn - Tâm điểm kết nối tương lai
          </h2>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8 opacity-90">
            Tọa lạc tại xã Long Hòa và thị trấn Cần Thạnh, Vinhomes Cần Giờ
            (tên thương mại Vinhomes Long Beach) là siêu dự án lấn biển quy mô
            2.870 ha. Đây không chỉ là một dự án bất động sản, mà là biểu tượng
            mới của TP.HCM, kết nối hài hòa giữa hệ sinh thái rừng ngập mặn Cần
            Giờ và hạ tầng hiện đại bậc nhất.
          </p>
          <div className="grid grid-cols-2 gap-8 py-8 border-t border-outline-variant/30">
            <div>
              <h4 className="font-headline font-extrabold text-3xl text-secondary mb-2">
                2.870 ha
              </h4>
              <p className="text-sm font-label text-on-surface opacity-70">
                Tổng diện tích quy hoạch
              </p>
            </div>
            <div>
              <h4 className="font-headline font-extrabold text-3xl text-secondary mb-2">
                5 Phân khu
              </h4>
              <p className="text-sm font-label text-on-surface opacity-70">
                Đa dạng loại hình sản phẩm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities: Bento Grid */}
      <section className="py-32 bg-primary text-on-primary">
        <div className="container mx-auto px-6 md:px-24">
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl mb-4">
              Tiện ích đặc quyền 5 sao
            </h2>
            <p className="text-on-primary-container max-w-2xl mx-auto">
              Tận hưởng cuộc sống nghỉ dưỡng mỗi ngày với hệ sinh thái tiện ích
              đẳng cấp quốc tế ngay ngưỡng cửa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group">
              <img
                alt="Resort Pool"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDECKyouMVMdp3lRuilj2q_OPOhAC1NGDkRWouhcIORaGBDUiosUGzvMQJ6XPtAOAZJ2WOg6SAn6fK8H0Ejp4lRykTgbNlEXCyYn64ch1xgWmEmxMDsbypBM5zzEOOctwSX3LHtlxZHZ4puK1Uec15KIvgT4LWwEv5JO8VUYA9_yUeudSZJvPKTyf9IcUYZvZX9owoIfYeu4MIyPy5FMoJNIDHZiKAn6ln8i5g4z-95vZUDUpD89bTnH8gMnJrkGDpWHEcsy70vT58"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold mb-2">
                  Bể bơi vô cực lấn biển
                </h3>
                <p className="text-sm text-on-primary-container">
                  Trải nghiệm tầm nhìn không giới hạn ra đại dương xanh.
                </p>
              </div>
            </div>
            {/* Medium Card */}
            <div className="md:col-span-2 relative overflow-hidden group">
              <img
                alt="Hotel Lobby"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2u9sYZkm7R-xDGMXdMtV85iZ1cC1l-1-3QfHs6oPqVnkd8yD5gs8xrfKKoRAzlAkQbOMljOJIPDfUpSnUW-lsBGd16w797Epg7qdnNmo8CezQHAt1rhVd51APW15lbTqCh5IePTTPZG95J3jT_hJF1bfXdSa9PjOvwezJUb8LW2EmvBWBWdlfMIuYDuPivUXWqN4edt7c4h8_7tczcn_znXjEwmiUAXCrHoIk2pldB9DyVxJgSbV-iQ8dJ3rgMQeg9_FMktBWdAk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-xl font-bold mb-1">
                  Khách sạn & Resort 5*
                </h3>
              </div>
            </div>
            {/* Small Card 1 */}
            <div className="relative overflow-hidden group">
              <img
                alt="Gym & Spa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkTHcV4dyDSyVgYcUQmUUder4KM2aVaH9GKKVLwc4_f9ltbTuyClfJB_ja3VEsHTM-Ng_tmFET0JuuVqdpdzzTmD3JDVTQu8gV2erz1SQDsunHj2bsTzsNwNPj1xL8W6zVmuZiNZ3-xs_6QC27qyKO0hm9Oq4ZZIh1b8JIpLYkHGzZ0jK6daruIPfGrPoq1jprIo8N4QMVgRuq0g-919Er603P7CiK4wYp7BaglzY_TdRLe0Zqdm75bRgJd7OEdZgdM__IT7b4Zjc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold">Gym & Spa</h3>
              </div>
            </div>
            {/* Small Card 2 */}
            <div className="relative overflow-hidden group">
              <img
                alt="Bến du thuyền"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrrmGctVKgKbImyji2df4Eq2fs8-xESofDWsr7NZEr-BXI8CD230la3oKRjQdQP509NOJYrYQ_J4QvOF33-v2jvDemYnbN_uqtVr8IkQ1IFBXSK62439cobrKy2-XVEFrN3WIzissU1WPGOH6lIp0p7Ii4bDRbRno_okkgbX6eXnWN6xLsASCTX60fyXeK_2SXv2yer0pW2D_6AqPavYvsJXmOW0l2pP1pF5zpsGg7EHgZz4mkyXBVe13sdUT2GHxSa2VdOYYK4gg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold">Bến du thuyền</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layout / Floorplan */}
      <section className="py-32 px-6 md:px-24 bg-surface-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-secondary font-label font-bold uppercase tracking-widest text-xs mb-4 block">
              Mặt bằng phân khu
            </span>
            <h2 className="font-headline font-bold text-4xl text-primary mb-6">
              Quy hoạch đồng bộ & Tinh tế
            </h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Dự án được chia thành 5 phân khu chức năng (A, B, C, D, E) với các
              sản phẩm từ căn hộ cao cấp, shophouse thương mại đến biệt thự đơn
              lập xa hoa bậc nhất.
            </p>
            <div className="space-y-4">
              <div className="bg-surface p-6 border-l-4 border-secondary shadow-sm">
                <h4 className="font-bold text-primary mb-1">Phân khu A</h4>
                <p className="text-sm text-on-surface-variant">
                  Khu đô thị du lịch nghỉ dưỡng cao cấp
                </p>
              </div>
              <div className="bg-surface/50 p-6 border-l-4 border-outline-variant hover:bg-surface transition-all cursor-pointer">
                <h4 className="font-bold text-primary mb-1 opacity-70">
                  Phân khu B
                </h4>
                <p className="text-sm text-on-surface-variant opacity-70">
                  Trung tâm dịch vụ du lịch
                </p>
              </div>
              <div className="bg-surface/50 p-6 border-l-4 border-outline-variant hover:bg-surface transition-all cursor-pointer">
                <h4 className="font-bold text-primary mb-1 opacity-70">
                  Phân khu C & D
                </h4>
                <p className="text-sm text-on-surface-variant opacity-70">
                  Khu nhà ở thấp tầng & Tiện ích công cộng
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 bg-surface p-4 shadow-2xl relative overflow-hidden group">
            <img
              alt="Master Plan Map"
              className="w-full h-auto grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHKb-Ugu--GYEbnbDKm7IXjyZ98zj0oyN4dFzeUFh8BNCzbZuIudEV8B0lmcku0rT4ZzpK4ZLrfiW88FiC1UPtIZ41iQMSuR7ucWWN8u8ckc6Nx92xDUZhufRtk8hXcX56ZuoBLmiIfd-sKwttsU3y98nSGm1CuYsGNO4fpEQsSmVH1bm8QnOeKsX2enjsmAvkfxiQgRXLyiSsDEXKqEYX5HNTX6nejDJ5Z0AjvD_yw3bHXZIj2EE7ILUmc9gIvfSayTcSOHm1Go"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 backdrop-blur-[2px]">
              <button className="bg-secondary text-on-secondary px-8 py-3 font-bold shadow-lg flex items-center gap-2 cursor-pointer">
                <ZoomIn className="w-6 h-6" /> PHÓNG TO MẶT BẰNG
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-32 px-6 md:px-24 bg-primary text-on-primary relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          {/* Abstract background patterns */}
          <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-secondary-container rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-surface-container-lowest p-12 md:p-20 text-on-surface shadow-2xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-4">
              Nhận Bảng Giá & Tư Vấn Chi Tiết
            </h2>
            <p className="text-on-surface-variant">
              Đăng ký ngay để nhận thông tin mới nhất về bảng giá và chính sách
              bán hàng từ chủ đầu tư.
            </p>
          </div>
          <form
            className="space-y-10"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0 outline-none"
                id="name"
                placeholder=" "
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label
                className="absolute left-0 -top-4 text-xs font-label font-bold uppercase tracking-widest text-secondary transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-focus:font-bold pointer-events-none"
                htmlFor="name"
              >
                Họ và tên
              </label>
            </div>
            <div className="relative">
              <input
                className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0 outline-none"
                id="email"
                placeholder=" "
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label
                className="absolute left-0 -top-4 text-xs font-label font-bold uppercase tracking-widest text-secondary transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-focus:font-bold pointer-events-none"
                htmlFor="email"
              >
                Địa chỉ Email
              </label>
            </div>
            <div className="relative">
              <input
                className="peer w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0 outline-none"
                id="phone"
                placeholder=" "
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label
                className="absolute left-0 -top-4 text-xs font-label font-bold uppercase tracking-widest text-secondary transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-focus:font-bold pointer-events-none"
                htmlFor="phone"
              >
                Số điện thoại
              </label>
            </div>

            {submitMessage && (
              <div className={`p-4 rounded text-center font-medium ${submitMessage.includes('lỗi') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {submitMessage}
              </div>
            )}

            <div className="pt-6">
              <button
                className="w-full bg-secondary text-on-secondary py-5 font-bold text-lg hover:brightness-110 transition-all shadow-xl tracking-widest cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ĐANG GỬI..." : "ĐĂNG KÝ NGAY"}
              </button>
              <p className="text-center text-[10px] mt-6 opacity-50 font-label">
                Bằng việc đăng ký, quý khách đồng ý với chính sách bảo mật thông
                tin của chúng tôi.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00292e] dark:bg-[#001a1d] w-full py-12 px-6 md:px-12 font-inter text-sm leading-relaxed">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full border-b border-white/10 pb-12 mb-8">
          <div className="text-lg font-bold text-[#835400]">
            Vinhomes Cần Giờ
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-[#f7f9ff] opacity-60 hover:opacity-100 hover:text-[#835400] transition-all"
              href="#"
            >
              Chính sách bảo mật
            </a>
            <a
              className="text-[#f7f9ff] opacity-60 hover:opacity-100 hover:text-[#835400] transition-all"
              href="#"
            >
              Điều khoản sử dụng
            </a>
            <a
              className="text-[#f7f9ff] opacity-60 hover:opacity-100 hover:text-[#835400] transition-all"
              href="#"
            >
              Liên hệ
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#f7f9ff] opacity-40">
          <p>© 2024 Vinhomes Cần Giờ. All rights reserved.</p>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Share2 className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        {/* Zalo Button */}
        <a
          className="w-16 h-16 bg-[#0068ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300"
          href="https://zalo.me/0981766498"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.167 12.871c0-4.664-4.962-8.45-11.083-8.45C5.962 4.421 1 8.207 1 12.871c0 3.708 3.125 6.848 7.747 8.016l-1.026 3.123c-.156.475.337.892.748.618l3.966-2.646c.216.024.437.037.66.037 6.121 0 11.083-3.786 11.083-8.45l-.011.002z"></path>
          </svg>
        </a>
        {/* Phone Button */}
        <a
          className="w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300"
          href="tel:0981766498"
        >
          <Phone className="fill-current w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
