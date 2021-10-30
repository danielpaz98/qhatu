import { useState } from "react";
// STYLES
import "./styles/header.css";
// ICONS
import { SearchIcon, UserIcon, ShoppingBagIcon } from "~/components/SvgIcons";
// COMPONENTS
import Spinner from "~/components/Spinner";
// HOOKS
import { useProductCategories, useAuth } from "~/hooks";
// IMAGES
import logo from "~/assets/img/logo.svg";
import featherMenu from "~/assets/img/feather-menu.png";

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const { categories, isLoading } = useProductCategories();
	const { signOut, isAuthenticated } = useAuth();

	const toggleMenu = () => setOpenMenu((menu) => !menu);

	return (
		<header className="main-header">
			<div className="main-header-nav-top">
				<nav className="main-header-nav">
					<div className="main-header-logo">
						<img alt="Main Logo" src={logo} />
					</div>

					<ul className="nav-links">
						<li className="nav-link-item">
							<a className="nav-link active" href="#">
								Mujer
							</a>
						</li>

						<li className="vertical-link-divider" />

						<li className="nav-link-item">
							<a className="nav-link" href="#">
								Hombre
							</a>
						</li>

						<li className="vertical-link-divider" />

						<li className="nav-link-item">
							<a className="nav-link" href="#">
								Niñas
							</a>
						</li>
					</ul>
				</nav>

				<nav className="main-header-controls">
					<div className="main-header-searcher">
						<input placeholder="Buscar" type="text" />
						<SearchIcon />
					</div>

					<ul className="controls-menu">
						<li className="controls-menu-item item-menu">
							<button type="button" onClick={toggleMenu}>
								<img alt="Feather Menu" src={featherMenu} />
							</button>
						</li>

						<li className="controls-menu-item item-logo">
							<div className="main-header-logo">
								<img alt="Main Logo" src={logo} />
							</div>
						</li>

						<li className="controls-menu-item item-shopping">
							<button className="btn-shopping" type="button">
								<ShoppingBagIcon />
								<span className="btn-shopping-amount">0</span>
							</button>
						</li>

						<li className="controls-menu-item">
							<button type="button">
								<UserIcon />
							</button>
						</li>

						{isAuthenticated && (
							<li className="controls-menu-item item-logout">
								<button title="Cerrar sesión" type="button" onClick={signOut}>
									<i className="material-icons">logout</i>
								</button>
							</li>
						)}
					</ul>
				</nav>
			</div>
			<div className="main-header-divider" />
			<div className={`main-header-nav-bottom${openMenu ? " show" : ""}`}>
				<button className="btn-main-header-nav-bottom" type="button" onClick={toggleMenu} />

				<nav className="dropdown-nav">
					<ul className="dropdown-nav-list">
						{isLoading ? (
							<Spinner />
						) : (
							categories.map(({ category }, index) => (
								<li key={index} className="dropdown-nav-list-item">
									<a className="dropdown-nav-list-link" href="#">
										<span>{category}</span>
										<i className="material-icons">keyboard_arrow_down</i>
									</a>
								</li>
							))
						)}

						<li className="dropdown-nav-list-item">
							<a className="dropdown-nav-list-link" href="#">
								Básicos
							</a>
						</li>

						<li className="dropdown-nav-list-item">
							<a className="dropdown-nav-list-link" href="#">
								Colecciones
							</a>
						</li>

						<li className="dropdown-nav-list-item">
							<a className="dropdown-nav-list-link active" href="#">
								Descuentos
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="overlay" onClick={toggleMenu} />
		</header>
	);
}
