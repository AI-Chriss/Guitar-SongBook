import Logo from '/assets/Logo.svg'

export default function Header() {
  return (
    <header className='p-8 flex justify-center'>
      <img src={Logo} alt='Logo' className='' />
    </header>
  )
} 