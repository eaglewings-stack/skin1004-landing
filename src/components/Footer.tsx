export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void py-12 pb-24 md:pb-12">
      <div className="section-padding">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-white">
                SKIN<span className="text-centella-400">1004</span>
              </p>
              <p className="mt-2 max-w-xs break-keep text-xs leading-relaxed text-zinc-600">
                마다가스카르 센텔라에 집착하는 K-뷰티 브랜드
              </p>
              <p className="mt-3 text-xs text-zinc-700">© 2026 SKIN1004. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-xs text-zinc-500">
              <a href="#" className="transition-colors duration-500 ease-spring hover:text-centella-400">
                이용약관
              </a>
              <a href="#" className="transition-colors duration-500 ease-spring hover:text-centella-400">
                개인정보처리방침
              </a>
              <a href="#" className="transition-colors duration-500 ease-spring hover:text-centella-400">
                고객센터
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
