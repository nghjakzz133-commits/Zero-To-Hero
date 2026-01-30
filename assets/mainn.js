/* ===============================================
   ZERO TO HERO - MAIN JAVASCRIPT
   Complete with i18n and all interactive features
   =============================================== */

// ==========================================
// SECTION 1: INTERNATIONALIZATION (i18n)
// ==========================================

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_partnership: "Partnership",
    nav_team: "Team",
    nav_market: "Market",
    nav_contact: "Contact",
    
    // Hero Section
    badge: "Embark on a journey to conquer the market.",
    hero_zero: "Zero",
    hero_to: "To",
    hero_hero: "Hero",
    hero_sub: "Building sustainable growth through global partnerships and professional execution.",
    hero_btn_partner: "Become a Partner",
    hero_btn_explore: "Explore Markets",
    
    // Statistics
    stat_partners_num: "150+",
    stat_partners_label: "Global Partners",
    stat_countries_num: "45+",
    stat_countries_label: "Countries",
    stat_volume_num: "$2.5B+",
    stat_volume_label: "Trading Volume",
    stat_experience_num: "15+",
    stat_experience_label: "Years Experience",
    
    // Market Snapshot
    market_title: "Market Snapshot",
    market_sub: "Live public market overview for general monitoring. Real-time data from global exchanges.",
    tab_gold: "GOLD",
    tab_fx: "FX",
    tab_crypto: "CRYPTO",
    tab_indices: "INDICES",
    tab_commodities: "COMMODITIES",
    pair_eurusd: "EUR / USD",
    
    // About Section
    about_label: "Who We Are",
    about_title: "Leading the Future of Global Financial Markets",
    about_desc_1: "Zero To Hero is a premier corporate partner network connecting investors, traders, and financial institutions across the globe. With over 15 years of experience in international markets, we provide cutting-edge solutions for forex, commodities, cryptocurrencies, and equity trading.",
    about_desc_2: "Our mission is to empower our partners with professional tools, market insights, and strategic guidance to achieve sustainable growth in today's dynamic financial landscape.",
    about_btn: "Learn More About Us",
    
    // Features
    feature_security_title: "Bank-Level Security",
    feature_security_desc: "Advanced encryption and multi-layer protection for all transactions",
    feature_support_title: "24/7 Expert Support",
    feature_support_desc: "Dedicated multilingual team available around the clock",
    feature_global_title: "Global Reach",
    feature_global_desc: "Operating in 45+ countries with local expertise",
    
    // Services
    services_label: "Our Services",
    services_title: "Comprehensive Trading Solutions",
    services_sub: "Professional services designed to meet the needs of modern traders and investors",
    
    service_forex_title: "Forex Trading",
    service_forex_desc: "Access to 50+ currency pairs with tight spreads and instant execution. Trade major, minor, and exotic pairs on institutional-grade platforms.",
    service_forex_feat1: "• Leverage up to 1:500",
    service_forex_feat2: "• 0.0 pip spreads available",
    service_forex_feat3: "• Advanced charting tools",
    
    service_commodities_title: "Commodities Trading",
    service_commodities_desc: "Trade gold, silver, oil, and other commodities with competitive pricing. Diversify your portfolio with precious metals and energy products.",
    service_commodities_feat1: "• Gold & Silver CFDs",
    service_commodities_feat2: "• Energy commodities",
    service_commodities_feat3: "• Agricultural products",
    
    service_crypto_title: "Cryptocurrency",
    service_crypto_desc: "Trade Bitcoin, Ethereum, and 30+ digital assets 24/7. Capitalize on crypto market volatility with advanced trading tools.",
    service_crypto_feat1: "• 30+ crypto pairs",
    service_crypto_feat2: "• 24/7 trading",
    service_crypto_feat3: "• Secure cold storage",
    
    service_indices_title: "Stock Indices",
    service_indices_desc: "Trade major global indices including S&P 500, NASDAQ, DAX, and more. Gain exposure to entire markets with single positions.",
    service_indices_feat1: "• 20+ global indices",
    service_indices_feat2: "• Low margin requirements",
    service_indices_feat3: "• Extended trading hours",
    
    service_education_title: "Trading Education",
    service_education_desc: "Comprehensive educational resources from beginner to advanced levels. Webinars, video tutorials, and market analysis from industry experts.",
    service_education_feat1: "• Free webinars weekly",
    service_education_feat2: "• Video course library",
    service_education_feat3: "• 1-on-1 coaching",
    
    service_analytics_title: "Market Analytics",
    service_analytics_desc: "Daily market analysis, economic calendars, and real-time news feeds. Make informed decisions with professional-grade research tools.",
    service_analytics_feat1: "• Daily market reports",
    service_analytics_feat2: "• Economic calendar",
    service_analytics_feat3: "• Trading signals",
    
    // Why Choose Us
    why_label: "Why Choose Us",
    why_title: "Your Success is Our Priority",
    why_sub: "Join thousands of successful traders and investors worldwide",
    
    why_card1_title: "Regulatory Compliance",
    why_card1_desc: "Fully licensed and regulated by international financial authorities. Your funds are segregated and protected by investor compensation schemes.",
    
    why_card2_title: "Advanced Technology",
    why_card2_desc: "State-of-the-art trading platforms with lightning-fast execution. MetaTrader 4/5, cTrader, and proprietary mobile apps available.",
    
    why_card3_title: "Competitive Pricing",
    why_card3_desc: "Industry-leading spreads and commission structures. No hidden fees, transparent pricing on all instruments and services.",
    
    why_card4_title: "Professional Support",
    why_card4_desc: "Dedicated account managers and multilingual support team. Get expert assistance whenever you need it, in your preferred language.",
    
    why_card5_title: "Partnership Programs",
    why_card5_desc: "Lucrative IB and affiliate programs with competitive commission structures. Grow your business with our comprehensive partner support.",
    
    why_card6_title: "Risk Management",
    why_card6_desc: "Advanced risk management tools including negative balance protection, stop-loss orders, and position monitoring systems.",
    
    // Market News
    news_label: "Market Insights",
    news_title: "Latest Market News & Analysis",
    news_sub: "Stay informed with real-time market updates and expert commentary",
    news_badge_analysis: "Analysis",
    news_badge_crypto: "Crypto",
    news_badge_commodities: "Commodities",
    news_badge_forex: "Forex",
    news_read_more: "Read Full Analysis →",
    news_view_all: "View All Market News",
    
    news1_title: "Global Markets Rally on Federal Reserve Rate Decision",
    news1_excerpt: "Major indices surge as the Federal Reserve signals a potential pause in interest rate hikes. Analysis of market implications and trading opportunities in the current environment.",
    
    news2_title: "Bitcoin Breaks $100K Barrier Amid Institutional Adoption",
    news2_excerpt: "Cryptocurrency markets reach new milestones as major institutions continue to increase digital asset allocations.",
    
    news3_title: "Gold Prices Surge to Record Highs on Safe-Haven Demand",
    news3_excerpt: "Precious metals continue their upward trajectory as investors seek protection against economic uncertainty.",
    
    news4_title: "EUR/USD Volatility Expected Ahead of ECB Meeting",
    news4_excerpt: "Currency markets brace for potential policy shifts as European Central Bank prepares key announcement.",
    
    // Platforms
    platforms_label: "Trading Platforms",
    platforms_title: "Professional Trading Tools",
    platforms_sub: "Industry-leading platforms for every trading style",
    platform_download: "Download",
    platform_launch: "Launch WebTrader",
    
    platform_mt4_desc: "The world's most popular trading platform with advanced charting, automated trading, and extensive technical indicators.",
    platform_mt4_feat1: "✓ Expert Advisors (EAs)",
    platform_mt4_feat2: "✓ Custom indicators",
    platform_mt4_feat3: "✓ Mobile & desktop",
    
    platform_mt5_desc: "Next-generation multi-asset platform with advanced features, enhanced charting, and broader market access.",
    platform_mt5_feat1: "✓ Multi-asset trading",
    platform_mt5_feat2: "✓ 21 timeframes",
    platform_mt5_feat3: "✓ Economic calendar",
    
    platform_ctrader_desc: "Intuitive platform with advanced order types, depth of market, and lightning-fast execution for serious traders.",
    platform_ctrader_feat1: "✓ Level II pricing",
    platform_ctrader_feat2: "✓ cAlgo automation",
    platform_ctrader_feat3: "✓ Copy trading",
    
    platform_web_desc: "Access your account from any browser, no download required. Full trading functionality on desktop or mobile web.",
    platform_web_feat1: "✓ No installation",
    platform_web_feat2: "✓ Cross-platform",
    platform_web_feat3: "✓ Real-time data",
    
    // Testimonials
    testimonials_label: "Testimonials",
    testimonials_title: "What Our Partners Say",
    testimonials_sub: "Real success stories from our global community",
    
    testimonial1_text: "Working with Zero To Hero has transformed my trading career. Their platform is reliable, the execution is fast, and the support team is always there when I need them. The educational resources helped me develop a profitable strategy.",
    testimonial1_role: "Professional Trader, Singapore",
    
    testimonial2_text: "As an IB partner, I've seen exceptional results. The commission structure is competitive, and my clients are consistently satisfied with the service quality. Zero To Hero truly values their partners.",
    testimonial2_role: "IB Partner, United Kingdom",
    
    testimonial3_text: "The market analysis and daily insights are incredibly valuable. I've improved my trading performance significantly since joining. The platform is user-friendly and perfect for both beginners and experienced traders.",
    testimonial3_role: "Investor, United States",
    
    testimonial4_text: "Working with Zero To Hero has been an excellent experience. Professional service, competitive spreads, and excellent Vietnamese support. The support team is very professional.",
    testimonial4_role: "Trader, Vietnam",
    
    // CTA Section
    cta_title: "Ready to Start Your Trading Journey?",
    cta_desc: "Join thousands of successful traders worldwide. Open your account today and get access to professional trading tools, educational resources, and 24/7 support.",
    cta_btn_start: "Open Live Account",
    cta_btn_demo: "Try Demo Account",
    cta_feat1: "Account opening in 5 minutes",
    cta_feat2: "$100 minimum deposit",
    cta_feat3: "No hidden fees",
    
    // Footer
    footer_tag: "Corporate Partner Network",
    footer_desc: "A leading global financial services provider connecting traders and investors with international markets since 2010.",
    footer_products: "Products",
    footer_platforms: "Platforms",
    footer_company: "Company",
    footer_support: "Support",
    footer_link_forex: "Forex Trading",
    footer_link_commodities: "Commodities",
    footer_link_crypto: "Cryptocurrency",
    footer_link_indices: "Stock Indices",
    footer_link_shares: "Shares",
    footer_link_mobile: "Mobile Apps",
    footer_link_careers: "Careers",
    footer_link_help: "Help Center",
    footer_link_faq: "FAQ",
    footer_link_education: "Education",
    footer_link_webinar: "Webinars",
    footer_link_calculator: "Calculators",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    footer_risk: "Risk Disclosure",
    footer_aml: "AML Policy",
    footer_rights: "All rights reserved.",
    footer_disclaimer: "<strong>Risk Warning:</strong> Trading foreign exchange, commodities, and other leveraged products carries a high level of risk and may not be suitable for all investors. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you may sustain a loss of some or all of your investment. You should not invest money that you cannot afford to lose."
  },
  
  vi: {
    // Navigation
    nav_home: "Trang Chủ",
    nav_about: "Giới Thiệu",
    nav_partnership: "Đối Tác",
    nav_team: "Đội Ngũ",
    nav_market: "Thị Trường",
    nav_contact: "Liên Hệ",
    
    // Hero Section
    badge: "Bắt đầu hành trình chinh phục thị trường.",
    hero_zero: "Từ Số",
    hero_to: "Đến",
    hero_hero: "Anh Hùng",
    hero_sub: "Xây dựng tăng trưởng bền vững thông qua đối tác toàn cầu và thực thi chuyên nghiệp.",
    hero_btn_partner: "Trở Thành Đối Tác",
    hero_btn_explore: "Khám Phá Thị Trường",
    
    // Statistics
    stat_partners_num: "150+",
    stat_partners_label: "Đối Tác Toàn Cầu",
    stat_countries_num: "45+",
    stat_countries_label: "Quốc Gia",
    stat_volume_num: "$2.5 Tỷ+",
    stat_volume_label: "Khối Lượng Giao Dịch",
    stat_experience_num: "15+",
    stat_experience_label: "Năm Kinh Nghiệm",
    
    // Market Snapshot
    market_title: "Tổng Quan Thị Trường",
    market_sub: "Tổng quan thị trường công khai trực tiếp để theo dõi chung. Dữ liệu thời gian thực từ các sàn giao dịch toàn cầu.",
    tab_gold: "VÀNG",
    tab_fx: "NGOẠI HỐI",
    tab_crypto: "TIỀN MÃ HÓA",
    tab_indices: "CHỈ SỐ",
    tab_commodities: "HÀNG HÓA",
    pair_eurusd: "EUR / USD",
    
    // About Section
    about_label: "Chúng Tôi Là Ai",
    about_title: "Dẫn Đầu Tương Lai Thị Trường Tài Chính Toàn Cầu",
    about_desc_1: "Zero To Hero là mạng lưới đối tác doanh nghiệp hàng đầu kết nối các nhà đầu tư, trader và tổ chức tài chính trên toàn cầu. Với hơn 15 năm kinh nghiệm trong thị trường quốc tế, chúng tôi cung cấp giải pháp tiên tiến cho giao dịch forex, hàng hóa, tiền mã hóa và chứng khoán.",
    about_desc_2: "Sứ mệnh của chúng tôi là trao quyền cho đối tác với các công cụ chuyên nghiệp, thông tin thị trường và hướng dẫn chiến lược để đạt được tăng trưởng bền vững trong bối cảnh tài chính năng động ngày nay.",
    about_btn: "Tìm Hiểu Thêm",
    
    // Features
    feature_security_title: "Bảo Mật Cấp Ngân Hàng",
    feature_security_desc: "Mã hóa tiên tiến và bảo vệ đa lớp cho mọi giao dịch",
    feature_support_title: "Hỗ Trợ Chuyên Gia 24/7",
    feature_support_desc: "Đội ngũ đa ngôn ngữ chuyên dụng luôn sẵn sàng hỗ trợ",
    feature_global_title: "Phạm Vi Toàn Cầu",
    feature_global_desc: "Hoạt động tại 45+ quốc gia với chuyên môn địa phương",
    
    // Services
    services_label: "Dịch Vụ Của Chúng Tôi",
    services_title: "Giải Pháp Giao Dịch Toàn Diện",
    services_sub: "Dịch vụ chuyên nghiệp được thiết kế để đáp ứng nhu cầu của trader và nhà đầu tư hiện đại",
    
    service_forex_title: "Giao Dịch Forex",
    service_forex_desc: "Truy cập 50+ cặp tiền tệ với spread chặt chẽ và khớp lệnh tức thì. Giao dịch các cặp chính, phụ và kỳ lạ trên nền tảng cấp tổ chức.",
    service_forex_feat1: "• Đòn bẩy lên đến 1:500",
    service_forex_feat2: "• Spread 0.0 pip có sẵn",
    service_forex_feat3: "• Công cụ biểu đồ nâng cao",
    
    service_commodities_title: "Giao Dịch Hàng Hóa",
    service_commodities_desc: "Giao dịch vàng, bạc, dầu và các hàng hóa khác với giá cạnh tranh. Đa dạng hóa danh mục với kim loại quý và sản phẩm năng lượng.",
    service_commodities_feat1: "• CFD Vàng & Bạc",
    service_commodities_feat2: "• Hàng hóa năng lượng",
    service_commodities_feat3: "• Sản phẩm nông nghiệp",
    
    service_crypto_title: "Tiền Mã Hóa",
    service_crypto_desc: "Giao dịch Bitcoin, Ethereum và 30+ tài sản kỹ thuật số 24/7. Tận dụng biến động thị trường crypto với công cụ giao dịch nâng cao.",
    service_crypto_feat1: "• 30+ cặp crypto",
    service_crypto_feat2: "• Giao dịch 24/7",
    service_crypto_feat3: "• Lưu trữ lạnh an toàn",
    
    service_indices_title: "Chỉ Số Chứng Khoán",
    service_indices_desc: "Giao dịch các chỉ số toàn cầu chính bao gồm S&P 500, NASDAQ, DAX và nhiều hơn nữa. Tiếp cận toàn bộ thị trường với vị thế đơn lẻ.",
    service_indices_feat1: "• 20+ chỉ số toàn cầu",
    service_indices_feat2: "• Yêu cầu ký quỹ thấp",
    service_indices_feat3: "• Giờ giao dịch mở rộng",
    
    service_education_title: "Đào Tạo Giao Dịch",
    service_education_desc: "Tài nguyên giáo dục toàn diện từ cơ bản đến nâng cao. Webinar, video hướng dẫn và phân tích thị trường từ chuyên gia ngành.",
    service_education_feat1: "• Webinar miễn phí hàng tuần",
    service_education_feat2: "• Thư viện khóa học video",
    service_education_feat3: "• Huấn luyện 1-1",
    
    service_analytics_title: "Phân Tích Thị Trường",
    service_analytics_desc: "Phân tích thị trường hàng ngày, lịch kinh tế và nguồn cấp tin tức thời gian thực. Đưa ra quyết định sáng suốt với công cụ nghiên cứu cấp chuyên nghiệp.",
    service_analytics_feat1: "• Báo cáo thị trường hàng ngày",
    service_analytics_feat2: "• Lịch kinh tế",
    service_analytics_feat3: "• Tín hiệu giao dịch",
    
    // Why Choose Us
    why_label: "Tại Sao Chọn Chúng Tôi",
    why_title: "Thành Công Của Bạn Là Ưu Tiên Của Chúng Tôi",
    why_sub: "Tham gia cùng hàng nghìn trader và nhà đầu tư thành công trên toàn thế giới",
    
    why_card1_title: "Tuân Thủ Quy Định",
    why_card1_desc: "Được cấp phép và quản lý đầy đủ bởi các cơ quan tài chính quốc tế. Quỹ của bạn được tách biệt và bảo vệ bởi các chương trình bồi thường nhà đầu tư.",
    
    why_card2_title: "Công Nghệ Tiên Tiến",
    why_card2_desc: "Nền tảng giao dịch hiện đại với khớp lệnh nhanh như chớp. MetaTrader 4/5, cTrader và ứng dụng di động độc quyền có sẵn.",
    
    why_card3_title: "Giá Cạnh Tranh",
    why_card3_desc: "Spread và cấu trúc hoa hồng dẫn đầu ngành. Không có phí ẩn, giá cả minh bạch trên tất cả công cụ và dịch vụ.",
    
    why_card4_title: "Hỗ Trợ Chuyên Nghiệp",
    why_card4_desc: "Quản lý tài khoản chuyên dụng và đội ngũ hỗ trợ đa ngôn ngữ. Nhận hỗ trợ chuyên gia bất cứ khi nào bạn cần, bằng ngôn ngữ bạn ưa thích.",
    
    why_card5_title: "Chương Trình Đối Tác",
    why_card5_desc: "Chương trình IB và affiliate hấp dẫn với cấu trúc hoa hồng cạnh tranh. Phát triển doanh nghiệp của bạn với hỗ trợ đối tác toàn diện của chúng tôi.",
    
    why_card6_title: "Quản Lý Rủi Ro",
    why_card6_desc: "Công cụ quản lý rủi ro nâng cao bao gồm bảo vệ số dư âm, lệnh cắt lỗ và hệ thống giám sát vị thế.",
    
    // Market News
    news_label: "Thông Tin Thị Trường",
    news_title: "Tin Tức & Phân Tích Thị Trường Mới Nhất",
    news_sub: "Cập nhật thông tin với tin tức thị trường thời gian thực và bình luận chuyên gia",
    news_badge_analysis: "Phân Tích",
    news_badge_crypto: "Crypto",
    news_badge_commodities: "Hàng Hóa",
    news_badge_forex: "Forex",
    news_read_more: "Đọc Phân Tích Đầy Đủ →",
    news_view_all: "Xem Tất Cả Tin Tức",
    
    news1_title: "Thị Trường Toàn Cầu Tăng Mạnh Sau Quyết Định Lãi Suất Fed",
    news1_excerpt: "Các chỉ số chính tăng vọt khi Cục Dự trữ Liên bang báo hiệu khả năng tạm dừng tăng lãi suất. Phân tích tác động thị trường và cơ hội giao dịch trong môi trường hiện tại.",
    
    news2_title: "Bitcoin Vượt Ngưỡng $100K Giữa Xu Hướng Chấp Nhận Của Tổ Chức",
    news2_excerpt: "Thị trường tiền mã hóa đạt cột mốc mới khi các tổ chức lớn tiếp tục tăng phân bổ tài sản kỹ thuật số.",
    
    news3_title: "Giá Vàng Tăng Cao Kỷ Lục Do Nhu Cầu Trú Ẩn An Toàn",
    news3_excerpt: "Kim loại quý tiếp tục xu hướng tăng khi nhà đầu tư tìm kiếm bảo vệ chống lại bất ổn kinh tế.",
    
    news4_title: "EUR/USD Dự Kiến Biến Động Trước Cuộc Họp ECB",
    news4_excerpt: "Thị trường tiền tệ chuẩn bị cho các thay đổi chính sách tiềm năng khi Ngân hàng Trung ương Châu Âu chuẩn bị thông báo quan trọng.",
    
    // Platforms
    platforms_label: "Nền Tảng Giao Dịch",
    platforms_title: "Công Cụ Giao Dịch Chuyên Nghiệp",
    platforms_sub: "Nền tảng dẫn đầu ngành cho mọi phong cách giao dịch",
    platform_download: "Tải Xuống",
    platform_launch: "Khởi Động WebTrader",
    
    platform_mt4_desc: "Nền tảng giao dịch phổ biến nhất thế giới với biểu đồ nâng cao, giao dịch tự động và các chỉ báo kỹ thuật mở rộng.",
    platform_mt4_feat1: "✓ Expert Advisors (EAs)",
    platform_mt4_feat2: "✓ Chỉ báo tùy chỉnh",
    platform_mt4_feat3: "✓ Di động & máy tính",
    
    platform_mt5_desc: "Nền tảng đa tài sản thế hệ tiếp theo với các tính năng nâng cao, biểu đồ cải tiến và truy cập thị trường rộng hơn.",
    platform_mt5_feat1: "✓ Giao dịch đa tài sản",
    platform_mt5_feat2: "✓ 21 khung thời gian",
    platform_mt5_feat3: "✓ Lịch kinh tế",
    
    platform_ctrader_desc: "Nền tảng trực quan với các loại lệnh nâng cao, độ sâu thị trường và khớp lệnh nhanh như chớp cho trader nghiêm túc.",
    platform_ctrader_feat1: "✓ Định giá cấp II",
    platform_ctrader_feat2: "✓ Tự động hóa cAlgo",
    platform_ctrader_feat3: "✓ Copy trading",
    
    platform_web_desc: "Truy cập tài khoản từ bất kỳ trình duyệt nào, không cần tải xuống. Chức năng giao dịch đầy đủ trên web máy tính hoặc di động.",
    platform_web_feat1: "✓ Không cần cài đặt",
    platform_web_feat2: "✓ Đa nền tảng",
    platform_web_feat3: "✓ Dữ liệu thời gian thực",
    
    // Testimonials
    testimonials_label: "Đánh Giá",
    testimonials_title: "Đối Tác Của Chúng Tôi Nói Gì",
    testimonials_sub: "Câu chuyện thành công thực tế từ cộng đồng toàn cầu",
    
    testimonial1_text: "Làm việc với Zero To Hero đã thay đổi sự nghiệp giao dịch của tôi. Nền tảng của họ đáng tin cậy, khớp lệnh nhanh và đội ngũ hỗ trợ luôn có mặt khi tôi cần. Tài nguyên giáo dục đã giúp tôi phát triển chiến lược có lợi nhuận.",
    testimonial1_role: "Trader Chuyên Nghiệp, Singapore",
    
    testimonial2_text: "Là đối tác IB, tôi đã thấy kết quả đặc biệt. Cấu trúc hoa hồng cạnh tranh và khách hàng của tôi luôn hài lòng với chất lượng dịch vụ. Zero To Hero thực sự coi trọng đối tác của họ.",
    testimonial2_role: "Đối Tác IB, Vương Quốc Anh",
    
    testimonial3_text: "Phân tích thị trường và thông tin hàng ngày cực kỳ có giá trị. Tôi đã cải thiện đáng kể hiệu suất giao dịch kể từ khi tham gia. Nền tảng thân thiện với người dùng và hoàn hảo cho cả trader mới và có kinh nghiệm.",
    testimonial3_role: "Nhà Đầu Tư, Hoa Kỳ",
    
    testimonial4_text: "Tôi đã giao dịch với nhiều sàn khác nhưng Zero To Hero là tốt nhất. Hỗ trợ tiếng Việt xuất sắc, nạp rút nhanh chóng và spread cạnh tranh. Đội ngũ hỗ trợ rất chuyên nghiệp.",
    testimonial4_role: "Trader, Việt Nam",
    
    // CTA Section
    cta_title: "Sẵn Sàng Bắt Đầu Hành Trình Giao Dịch?",
    cta_desc: "Tham gia cùng hàng nghìn trader thành công trên toàn thế giới. Mở tài khoản ngay hôm nay và truy cập công cụ giao dịch chuyên nghiệp, tài nguyên giáo dục và hỗ trợ 24/7.",
    cta_btn_start: "Mở Tài Khoản Thực",
    cta_btn_demo: "Dùng Thử Tài Khoản Demo",
    cta_feat1: "Mở tài khoản trong 5 phút",
    cta_feat2: "Nạp tối thiểu $100",
    cta_feat3: "Không có phí ẩn",
    
    // Footer
    footer_tag: "Mạng Lưới Đối Tác Doanh Nghiệp",
    footer_desc: "Nhà cung cấp dịch vụ tài chính toàn cầu hàng đầu kết nối trader và nhà đầu tư với thị trường quốc tế từ năm 2010.",
    footer_products: "Sản Phẩm",
    footer_platforms: "Nền Tảng",
    footer_company: "Công Ty",
    footer_support: "Hỗ Trợ",
    footer_link_forex: "Giao Dịch Forex",
    footer_link_commodities: "Hàng Hóa",
    footer_link_crypto: "Tiền Mã Hóa",
    footer_link_indices: "Chỉ Số Chứng Khoán",
    footer_link_shares: "Cổ Phiếu",
    footer_link_mobile: "Ứng Dụng Di Động",
    footer_link_careers: "Tuyển Dụng",
    footer_link_help: "Trung Tâm Trợ Giúp",
    footer_link_faq: "Câu Hỏi Thường Gặp",
    footer_link_education: "Giáo Dục",
    footer_link_webinar: "Webinar",
    footer_link_calculator: "Công Cụ Tính Toán",
    footer_terms: "Điều Khoản & Điều Kiện",
    footer_privacy: "Chính Sách Bảo Mật",
    footer_risk: "Tiết Lộ Rủi Ro",
    footer_aml: "Chính Sách AML",
    footer_rights: "Đã đăng ký bản quyền.",
    footer_disclaimer: "<strong>Cảnh Báo Rủi Ro:</strong> Giao dịch ngoại hối, hàng hóa và các sản phẩm có đòn bẩy khác mang mức rủi ro cao và có thể không phù hợp với tất cả nhà đầu tư. Trước khi quyết định giao dịch, bạn nên xem xét cẩn thận mục tiêu đầu tư, mức độ kinh nghiệm và khẩu vị rủi ro của mình. Có khả năng bạn có thể bị mất một phần hoặc toàn bộ khoản đầu tư. Bạn không nên đầu tư tiền mà bạn không thể mất."
  }
};

// Current language state
let currentLang = 'en';

/**
 * Initialize i18n system
 * Sets up language based on localStorage or defaults to English
 */
function initI18n() {
  // Check if language preference is saved
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && (savedLang === 'en' || savedLang === 'vi')) {
    currentLang = savedLang;
  }
  
  // Apply translations
  applyTranslations();
  
  // Update button states
  updateLanguageButtons();
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    
    if (translation) {
      // Check if element can contain HTML (for footer disclaimer)
      if (element.tagName === 'P' && key === 'footer_disclaimer') {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

/**
 * Switch language
 * @param {string} lang - Language code ('en' or 'vi')
 */
function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'vi') return;
  
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  
  applyTranslations();
  updateLanguageButtons();
}

/**
 * Update language button states
 */
function updateLanguageButtons() {
  // Header buttons
  const btnEN = document.getElementById('btnEN');
  const btnVI = document.getElementById('btnVI');
  
  // Drawer buttons
  const btnEN2 = document.getElementById('btnEN2');
  const btnVI2 = document.getElementById('btnVI2');
  
  if (currentLang === 'en') {
    btnEN?.classList.add('active');
    btnVI?.classList.remove('active');
    btnEN2?.classList.add('active');
    btnVI2?.classList.remove('active');
  } else {
    btnEN?.classList.remove('active');
    btnVI?.classList.add('active');
    btnEN2?.classList.remove('active');
    btnVI2?.classList.add('active');
  }
}

// ==========================================
// SECTION 2: MOBILE NAVIGATION
// ==========================================

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navDrawer = document.getElementById('navDrawer');
  
  if (menuBtn && navDrawer) {
    menuBtn.addEventListener('click', () => {
      navDrawer.classList.toggle('show');
      menuBtn.classList.toggle('active');
    });
    
    // Close drawer when clicking on links
    const drawerLinks = navDrawer.querySelectorAll('.drawer-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('show');
        menuBtn.classList.remove('active');
      });
    });
    
    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (!navDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
        navDrawer.classList.remove('show');
        menuBtn.classList.remove('active');
      }
    });
  }
}

// ==========================================
// SECTION 3: MARKET TABS
// ==========================================

/**
 * Initialize market tabs functionality
 */
function initMarketTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('show'));
      
      // Show target panel
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('show');
      }
    });
  });
}

// ==========================================
// SECTION 4: TRADINGVIEW WIDGETS
// ==========================================

/**
 * Initialize TradingView widgets
 * Loads charts for different market instruments
 */
function initTradingViewWidgets() {
  // Check if TradingView is loaded
  if (typeof TradingView === 'undefined') {
    console.warn('TradingView library not loaded');
    return;
  }
  
  // Common widget settings
  const commonSettings = {
    width: "100%",
    height: "100%",
    locale: currentLang === 'vi' ? 'vi_VN' : 'en',
    dateRange: "12M",
    colorTheme: "light",
    trendLineColor: "#d4af37",
    underLineColor: "rgba(212, 175, 55, 0.3)",
    isTransparent: false,
    autosize: true,
    largeChartUrl: ""
  };
  
  // Gold Tab - XAU/USD
  if (document.getElementById('tv_index_xauusd')) {
    new TradingView.widget({
      ...commonSettings,
      symbol: "OANDA:XAUUSD",
      container_id: "tv_index_xauusd"
    });
  }
  
  // Gold Tab - EUR/USD mini
  if (document.getElementById('tv_index_eurusd')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "FX:EURUSD",
      container_id: "tv_index_eurusd"
    });
  }
  
  // Gold Tab - BTC/USD mini
  if (document.getElementById('tv_index_btcusd')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "BINANCE:BTCUSDT",
      container_id: "tv_index_btcusd"
    });
  }
  
  // Gold Tab - XAG/USD mini
  if (document.getElementById('tv_index_xagusd')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "OANDA:XAGUSD",
      container_id: "tv_index_xagusd"
    });
  }
  
  // FX Tab
  if (document.getElementById('tv_fx_eurusd')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "FX:EURUSD",
      container_id: "tv_fx_eurusd"
    });
  }
  
  if (document.getElementById('tv_fx_gbpusd')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "FX:GBPUSD",
      container_id: "tv_fx_gbpusd"
    });
  }
  
  if (document.getElementById('tv_fx_usdjpy')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "FX:USDJPY",
      container_id: "tv_fx_usdjpy"
    });
  }
  
  if (document.getElementById('tv_fx_audusd')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "FX:AUDUSD",
      container_id: "tv_fx_audusd"
    });
  }
  
  // Crypto Tab
  if (document.getElementById('tv_crypto_btc')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "BINANCE:BTCUSDT",
      container_id: "tv_crypto_btc"
    });
  }
  
  if (document.getElementById('tv_crypto_eth')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "BINANCE:ETHUSDT",
      container_id: "tv_crypto_eth"
    });
  }
  
  if (document.getElementById('tv_crypto_bnb')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "BINANCE:BNBUSDT",
      container_id: "tv_crypto_bnb"
    });
  }
  
  if (document.getElementById('tv_crypto_xrp')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "BINANCE:XRPUSDT",
      container_id: "tv_crypto_xrp"
    });
  }
  
  // Indices Tab
  if (document.getElementById('tv_indices_spx')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "SP:SPX",
      container_id: "tv_indices_spx"
    });
  }
  
  if (document.getElementById('tv_indices_ndx')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "NASDAQ:NDX",
      container_id: "tv_indices_ndx"
    });
  }
  
  if (document.getElementById('tv_indices_dji')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "DJ:DJI",
      container_id: "tv_indices_dji"
    });
  }
  
  if (document.getElementById('tv_indices_dax')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "XETR:DAX",
      container_id: "tv_indices_dax"
    });
  }
  
  // Commodities Tab
  if (document.getElementById('tv_commodities_oil')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "TVC:USOIL",
      container_id: "tv_commodities_oil"
    });
  }
  
  if (document.getElementById('tv_commodities_gas')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "NYMEX:NG1!",
      container_id: "tv_commodities_gas"
    });
  }
  
  if (document.getElementById('tv_commodities_silver')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "OANDA:XAGUSD",
      container_id: "tv_commodities_silver"
    });
  }
  
  if (document.getElementById('tv_commodities_copper')) {
    new TradingView.MiniChart({
      ...commonSettings,
      height: 280,
      symbol: "COMEX:HG1!",
      container_id: "tv_commodities_copper"
    });
  }
}

// ==========================================
// SECTION 5: SMOOTH SCROLL
// ==========================================

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================
// SECTION 6: HEADER SCROLL EFFECT
// ==========================================

/**
 * Add shadow to header on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
  });
}

// ==========================================
// SECTION 7: SCROLL ANIMATIONS
// ==========================================

/**
 * Animate elements on scroll
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate
  const animateElements = document.querySelectorAll(`
    .service-card,
    .why-card,
    .news-card,
    .platform-card,
    .testimonial-card,
    .feature-item
  `);
  
  animateElements.forEach(el => observer.observe(el));
}

// ==========================================
// SECTION 8: ACTIVE NAV LINK
// ==========================================

/**
 * Update active nav link based on scroll position
 */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      const href = link.getAttribute('href');
      if (href === `#${current}` || (current === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================
// SECTION 9: FORM VALIDATION (if needed)
// ==========================================

/**
 * Basic form validation
 * Can be expanded for contact forms
 */
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// ==========================================
// SECTION 10: UTILITY FUNCTIONS
// ==========================================

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code
 */
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
}

// ==========================================
// SECTION 11: INITIALIZATION
// ==========================================

/**
 * Main initialization function
 * Runs when DOM is fully loaded
 */
function init() {
  console.log('Zero To Hero - Initializing...');
  
  // Initialize all modules
  initI18n();
  initMobileMenu();
  initMarketTabs();
  initTradingViewWidgets();
  initSmoothScroll();
  initHeaderScroll();
  initScrollAnimations();
  initActiveNavLink();
  
  // Set up language switchers
  const btnEN = document.getElementById('btnEN');
  const btnVI = document.getElementById('btnVI');
  const btnEN2 = document.getElementById('btnEN2');
  const btnVI2 = document.getElementById('btnVI2');
  
  btnEN?.addEventListener('click', () => switchLanguage('en'));
  btnVI?.addEventListener('click', () => switchLanguage('vi'));
  btnEN2?.addEventListener('click', () => switchLanguage('en'));
  btnVI2?.addEventListener('click', () => switchLanguage('vi'));
  
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  console.log('Zero To Hero - Initialized successfully!');
}

// ==========================================
// SECTION 12: EVENT LISTENERS
// ==========================================

// DOM Content Loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Window Load (for TradingView widgets)
window.addEventListener('load', () => {
  // Reinitialize TradingView widgets if needed
  if (typeof TradingView !== 'undefined') {
    initTradingViewWidgets();
  }
});

// Window Resize (debounced)
window.addEventListener('resize', debounce(() => {
  // Handle responsive changes if needed
  console.log('Window resized');
}, 250));

// Export functions for use in other scripts if needed
window.ZeroToHero = {
  switchLanguage,
  formatNumber,
  formatCurrency,
  validateForm
};
