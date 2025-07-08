import Image from "next/image";
import logo from "../../../../public/logo.png";
import SearchBar from "../ui/SearchBar";
import Link from "next/link";
import { User, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link href="/" className="navbar__brand">
          <Image
            className="navbar__logo"
            src={logo || "/placeholder.svg"}
            width={40}
            height={40}
            alt="Company logo"
            priority
          />
        </Link>

        <nav className="navbar__nav">
          <div className="navbar__search">
            <SearchBar />
          </div>

          <div className="navbar__actions">
            <Link href="/pages/myBookings" className="navbar__link">
              <Calendar size={18} />
              <span>My Bookings</span>
            </Link>

            <Link
              href="/pages/profile"
              className="navbar__link navbar__link--profile"
            >
              <User size={18} />
              <span className="sr-only">Profile</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
