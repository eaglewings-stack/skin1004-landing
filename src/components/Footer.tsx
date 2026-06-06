export default function Footer() {
  return (
    <footer className="border-t border-aqua-100/80 bg-white/60 py-12 pb-24 backdrop-blur-sm md:pb-12">
      <div className="section-padding">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-extrabold text-navy-700">
                SKIN<span className="text-aqua-500">1004</span>
              </p>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-navy-400">
                A K-beauty brand obsessed with Madagascar Centella
              </p>
              <p className="mt-3 text-xs text-navy-300">© 2026 SKIN1004. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-xs text-navy-400">
              <a href="#" className="transition-colors duration-500 ease-spring hover:text-aqua-600">
                Terms of Service
              </a>
              <a href="#" className="transition-colors duration-500 ease-spring hover:text-aqua-600">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-500 ease-spring hover:text-aqua-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
