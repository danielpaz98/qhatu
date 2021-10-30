// STYLES
import "./styles/footer.css";
// ICONS
import { FacebookIcon, TwitterIcon, InstagramIcon } from "~/components/SvgIcons";
// IMAGES
import typePayments from "~/assets/img/payments.png";

export default function Footer() {
	return (
		<footer className="main-footer">
			<div className="footer-info">
				<div className="footer-info-block">
					<div className="footer-info-company">
						<h4 className="footer-title">Empresa</h4>
						<ul>
							<li>
								<p>Información legal</p>
							</li>

							<li>
								<p>Política de privacidad</p>
							</li>

							<li>
								<p>Política de devoluciones</p>
							</li>
						</ul>
					</div>

					<div className="footer-info-help-support">
						<h4 className="footer-title">Ayuda y Apoyo</h4>
						<ul>
							<li>
								<p>Correoelectronico@hotmail.com</p>
							</li>

							<li>
								<p>Solicitudes</p>
							</li>
						</ul>
					</div>

					<div className="footer-info-admin">
						<h4 className="footer-title">Soy Admin</h4>
						<ul>
							<li>
								<p>Iniciar sesión</p>
							</li>
						</ul>
					</div>

					<div className="footer-info-type-payments">
						<h4 className="footer-title">Aceptamos</h4>
						<img alt="Tipos de pago" src={typePayments} />
					</div>
				</div>

				<div className="footer-info-copy">
					Copyright © {new Date().getFullYear()} Tsakana. Todos los derechos reservados.
				</div>
			</div>

			<div className="footer-socials">
				<div className="footer-socials-contact">
					<h4 className="footer-title">Encuéntranos en</h4>

					<ul className="footer-socials-icons">
						<li className="footer-socials-icons-item">
							<FacebookIcon height="20" width="20" />
						</li>

						<li className="footer-socials-icons-item">
							<TwitterIcon height="20" width="20" />
						</li>

						<li className="footer-socials-icons-item">
							<InstagramIcon height="20" width="20" />
						</li>
					</ul>
				</div>

				<div className="footer-socials-newsletter">
					<h4 className="footer-title">Suscríbete al newsletter</h4>
					<p className="footer-socials-newsletter-text">
						Al hacerlo puedes obtener información de descuentos y promociones.
					</p>

					<div className="footer-socials-newsletter-subscribe">
						<div className="footer-socials-newsletter-input-block">
							<input className="footer-socials-newsletter-input" type="text" />
							<button className="footer-socials-newsletter-btn" type="button">
								Enviar
							</button>
						</div>

						<p>
							Al hacer click en ENVIAR, acepta nuestra <span>política de privacidad y cookies</span>.
						</p>
					</div>
				</div>

				<div className="footer-socials-type-payments">
					<h4 className="footer-title">Aceptamos</h4>
					<img alt="Tipos de pago" src={typePayments} />
				</div>
			</div>
		</footer>
	);
}
