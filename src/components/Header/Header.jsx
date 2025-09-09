import css from './Header.module.css';
import Logo from './Logo/logo';
import Navigation from './Navigation/Navigation';

export default function Header() {
  return (
    <div className={ css.header }>
      <Logo />
      <Navigation />
    </div>);
}