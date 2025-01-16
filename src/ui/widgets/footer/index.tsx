import NavLink from "@/ui/components/navLink";
import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="!text-white">
        {/* section 1 */}
        <div className="bg-[#6328e0] py-10">
          <h6 className="text-xl text-white font-bold">Aide & Contact</h6>
          {/* sub heading */}
          <span className="font-bold">
            <NavLink color="text-white" label="Questions" url="#" />
          </span>
          {/* links  */}
          <div className="space-y-2">
            {labels.map((label, index) => (
              <NavLink key={index} color="text-white" label={label} url="#" />
            ))}
          </div>
        </div>

        {/* section 2 */}
        <div className="bg-black py-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <NavLink color="text-white" label="Mentions légales" url="#" />
            <NavLink
              color="text-white"
              label="Protection des données"
              url="#"
            />
            <NavLink color="text-white" label="CGV" url="#" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const labels = [
  "Essayez d'abord, payez après",
  "Livraison en point retrait",
  "Suivre mon colis",
  "Moyens de paiement",
  "Guides des tailles",
  "Retour & remboursement",
  "S'inscrire à la newsletter",
];
