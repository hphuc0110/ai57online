import RegistrationForm from '../registration/RegistrationForm'

export default function HeroVisual() {
  return (
    <div className="relative z-10 w-full">
      <div className="mb-3 sm:mb-4">
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-hero-navy sm:text-xl">
          Đăng ký tư vấn miễn phí
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Để lại thông tin, AI57 sẽ liên hệ trong 24h.
        </p>
      </div>
      <RegistrationForm />
    </div>
  )
}
