import './App.css'
import {
  CurvedLine,
  TelegramLogoIcon,
  DoctorIllustrationSvg,
  DividerIcon,
  LogoSvg,
  VideoSvg,
  RegisterSvg,
  CheckupSvg,
  CalendarSvg,
  TickIcon,
  WelcomeIllustrationSvg
} from './svg'

const steps = [
  {
    svg: <RegisterSvg />,
    title: "Ro'yhatdan o'ting",
    desc: 'Telegram bot orqali registratsiyadan o’ting'
  },
  {
    svg: <VideoSvg />,
    title: "Rasm jo'nating",
    desc: "Kasallangan teri qismini rasmga olib jo'nating"
  },
  {
    svg: <CheckupSvg />,
    title: "Tashxis oling",
    desc: "24 soat ichida shifokor tashxisini oling"
  },
  {
    svg: <CalendarSvg />,
    title: "Oflayn ko'rik",
    desc: "Agar holatingiz jiddiy deb topilsa oflayn ko'rikka yoziling"
  }
]

const infos = [
  {
    title: '24/7',
    desc: 'Onlayn Aloqa'
  },
  {
    title: '24 soat',
    desc: 'tashxis oling'
  },
  {
    title: '15+ yillik',
    desc: 'tajribali Oliy Toifali Shifokor'
  }
]

const reasons = [
  {
    title: "Konsultatsiya Oliy toifali shifokorlar tomonidan beriladi"
  },
  {
    title: "Shifokor ko'rigiga soatlab navbatda turmaysiz"
  },
  {
    title: "24/7 soat biz bilan bog'lanishingiz mumkin"
  },
  {
    title: "Birinchi konsultatsiya tekinga amalga oshiriladi"
  },
  {
    title: "Uyingizdan chiqmasdan, shifokor ko'rigidan o'tishingiz mumkin"
  },
]
function App () {
  return (
    <body className='min-h-screen'>
      <header className='bg-[#E1EEFF]'>
        <div className='wrapper'>
          <nav className='flex justify-between py-10 h3'>
            <ul>
              <li>
                <strong className='flex items-center space-x-2 h3' >
                  <span className="lg:scale-150">
                    <LogoSvg />
                  </span>
                  <span className='highlighted'>Med</span>-Maslahat
                </strong>
              </li>
            </ul>
            <ul className='flex space-x-5 lg:space-x-16 highlighted '>
              <li className="hover:underline">
                <a href='#bot'>Telegram</a>
              </li>
              <li className="hover:underline">
                <a href='#about'>Konsultatsiya</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className='bg-secondary'>

          <div className='wrapper flex flex-col items-center 
          lg:flex-row-reverse lg:items-center lg:justify-between'>
            <div className="lg:scale-150 flex-1 flex items-center">
              <WelcomeIllustrationSvg />
            </div>
            <div className='flex flex-col lg:w-2/3 items-center lg:items-start'>
              <p className='line-clamp-2 h1'>Onlayn Konsultatsiyadan</p>
              <p className='h1'>
                <span className='highlighted mr-2'>Hoziroq foydalaning</span>
                <CurvedLine />
              </p>
              <p className='max-w-[460px] mt-5'>
                Sizni qiynayotgan savollarni jo’nating, mutahhasis shifokorlar
                sizga 24 soat ichida konsultatsiya natijalarini yuborishadi
              </p>

              <a
                href='https://t.me/dermatolog_doktor_bot'
                className='w-fit bg-white flex items-center space-x-5 px-6 py-2 rounded-full h3 my-20
              hover:bg-primary hover:text-white transition-all duration-150 ease-linear'
              >
                <span>Shifokorga Murojaat Qilish</span>
                <TelegramLogoIcon />
              </a>
            </div>
          </div>
        </section>
        <section className='bg-primary py-10'>
          <div className='wrapper flex flex-col lg:flex-row justify-between 
          space-y-10 lg:space-y-0'>
            {infos.map((info) => (
              <>
                <div className='stats text-white text-center'>
                  <h2 className='h2'>{info.title}</h2>
                  <span className='text-medium'>{info.desc}</span>
                </div>
                <span className='info-svg hidden lg:inline'>
                  <DividerIcon />
                </span>
              </>
            ))}
          </div>
        </section>
        <section id="about" className='py-20'>
          <div className="wrapper">
            <h2 className="h2 mb-10">Konsultatsiya qanday amalga oshiriladi?</h2>
            <div className=' flex gap-6 lg:flex-row
            flex-col'>
              {steps.map((step) => (
                <div className='border border-gray-500 flex-1 p-10 rounded-2xl text-center 
                flex flex-col space-y-10 items-center
                hover:bg-primary hover:text-white cursor-pointer
                transition-all duration-100 ease-linear'>
                  <span className="h-10 w-10 bg-secondary rounded-full 
                flex items-center justify-center
                scale-150">
                    {step.svg}
                  </span>
                  <div>
                    <h3 className="h4">{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="wrapper">
            <a
              href='https://t.me/dermatolog_doktor_bot'
              className='w-fit mx-auto text-white bg-primary flex items-center space-x-5 px-6 py-2 rounded-full h3 mt-20
              hover:bg-secondary hover:text-primary transition-all duration-150 ease-linear'
            >
              <span>Shifokorga Murojaat Qilish</span>
              <TelegramLogoIcon />
            </a>
          </div>
        </section>

        <section className="lg:py-20">
          <div className="wrapper flex lg:flex-row 
          flex-col gap-6">
            <div className="flex-1 flex items-center justify-center lg:scale-150">
              <DoctorIllustrationSvg />
            </div>
            <div className="flex-1">
              <h2 className="h2 my-4">Nega bizni tanlashingiz kerak?</h2>
              <ul className="flex flex-col space-y-3">
                {reasons.map(reason =>
                (<li className="flex space-x-2 text-medium items-center">
                  <span>
                    <TickIcon />
                  </span>
                  <span>{reason.title}</span>
                </li>)
                )}
              </ul>
            </div>

          </div>
        </section>

        <section id="bot" className="py-10">
          <div className="wrapper">
            <div className="bg-primary p-10 rounded-3xl text-center">
              <h2 className="text-white h2">Tekin konsultatiyaga yoziling</h2>
              <a
                href='https://t.me/dermatolog_doktor_bot'
                className='w-fit mx-auto mt-6 bg-secondary text-primary flex items-center space-x-5 px-6 py-2 rounded-full h3
              hover:bg-white transition-all duration-150 ease-linear'
              >
                <span className="hidden lg:inline">Dermatolog Shifokor konsultatsiyasiga yozilish </span>
                <span className="lg:hidden">Shifokorga murojaat</span>
                <TelegramLogoIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
    </body>
  )
}

export default App
