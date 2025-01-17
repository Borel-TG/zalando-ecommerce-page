import {
  FacebookOutlined,
  InstagramOutlined,
  PinterestOutlined,
  QuestionOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
// assets
import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import appstore from "./assets/appstore.png";
import colissimo from "./assets/colissimo.png";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-4 flex items-center space-x-2">
            <span>
              <QuestionOutlined />
            </span>{" "}
            <span>Aide & Contact</span>
          </h4>
          <ul className="space-y-2">
            <li>Questions fréquentes</li>
            <li>Essayez d'abord, payez après</li>
            <li>Suivre mon colis</li>
            <li>Guides des tailles</li>
            <li>S'inscrire à la newsletter</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Chèques cadeaux</h4>
          <ul className="space-y-2">
            <li>Offrir une carte cadeau</li>
            <li>Utiliser une carte cadeau</li>
            <li>Chèques cadeaux d'entreprise</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Zalando</h4>
          <ul className="space-y-2">
            <li>Corporate Website</li>
            <li>Emplois</li>
            <li>Presse</li>
            <li>Relations investisseurs</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Shopping en ligne facile
          </h4>
          <ul className="space-y-2">
            <li>Livraison offerte pour les commandes de plus de 34€*</li>
            <li>Satisfait ou remboursé sous 30 jours</li>
          </ul>
        </div>
        {/* Column 5 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Nos services</h4>
          <ul className="space-y-2">
            <li>Privé by Zalando</li>
            <li>Programme partenaire</li>
            <li>Connected Retail</li>
            <li>Zalando Marketing Services</li>
            <li>En savoir plus</li>
          </ul>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-purple-800">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center text-sm">
          <div>
            <h4 className="font-semibold mb-2">Modes de livraison</h4>
            <div className="flex space-x-2">
              <Image src={colissimo} alt="Delivery 1" className="h-6 w-36" />
              <Image src={colissimo} alt="Delivery 2" className="h-6 w-36" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Moyens de paiement</h4>
            <div className="flex space-x-2">
              <Image src={visa} alt="Payment 1" className="h-10 w-28" />
              <Image src={mastercard} alt="Payment 2" className="h-10 w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center text-sm">
          <ul className="flex space-x-4">
            <li>Mentions légales</li>
            <li>Protection des données</li>
            <li>CGV</li>
          </ul>
          <div className="flex space-x-4">
            <div>
              <h4 className="font-semibold">Applications Zalando:</h4>
              <div className="flex space-x-2">
                <Image src={appstore} alt="App Store" className="h-36 w-36" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Plus d'inspiration</h4>
              <div className="flex space-x-2">
                <FacebookOutlined className="text-xl" />
                <TwitterOutlined className="text-xl" />
                <InstagramOutlined className="text-xl" />
                <PinterestOutlined className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
