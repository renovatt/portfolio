import Logo from '@molecules/logo'
import SocialLinks from '@organisms/social-links'

const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between overflow-hidden p-4 backdrop-blur-md transition-all lg:backdrop-blur-none">
      <SocialLinks />
      <Logo />
    </header>
  )
}

export default Header
