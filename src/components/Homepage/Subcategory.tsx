import type { SubcategoryType } from "@/types";
import LandingPageIcons from "@/components/icons/landingPageIcons";
import Link from "next/link";

const subcategories: SubcategoryType[] = [
  {
    name: "Merchandise Kampus",
    icon: <LandingPageIcons.MerchandiseKampusIcon />,
    category: "produk",
  },
  {
    name: "Alat Tulis Kantor",
    icon: <LandingPageIcons.AlatTulisKantorIcon />,
    category: "produk",
  },
  {
    name: "Makanan dan Minuman",
    icon: <LandingPageIcons.MakananDanMinumanIcon />,
    category: "produk",
  },
  {
    name: "Sewa Fasilitas",
    icon: <LandingPageIcons.SewaFasilitasIcon />,
    category: "sewa-gedung",
  },
  {
    name: "Layanan Digital",
    icon: <LandingPageIcons.LayananDigitalIcon />,
    category: "jasa",
  },
  {
    name: "Produk Kreatif Mahasiswa",
    icon: <LandingPageIcons.ProdukKreatifMahasiswaIcon />,
    category: "produk",
  },
  {
    name: "Kursus dan Pelatihan",
    icon: <LandingPageIcons.KursusDanPelatihanIcon />,
    category: "jasa",
  },
  {
    name: "Layanan Konsultasi",
    icon: <LandingPageIcons.LayananKonsultasiIcon />,
    category: "jasa",
  },
  {
    name: "Aplikasi dan Software",
    icon: <LandingPageIcons.AplikasiDanSoftwareIcon />,
    category: "produk",
  },
  {
    name: "Obat dan Farmasi",
    icon: <LandingPageIcons.ObatDanFarmasiIcon />,
    category: "produk",
  },
  {
    name: "Robotik dan Elektronik",
    icon: <LandingPageIcons.RobotikDanElektronikIcon />,
    category: "produk",
  },
  {
    name: "Seni dan Tari",
    icon: <LandingPageIcons.SeniDanTariIcon />,
    category: "jasa",
  },
  {
    name: "Pengolahan Data",
    icon: <LandingPageIcons.PengolahanDataIcon />,
    category: "jasa",
  },
  {
    name: "Percetakan",
    icon: <LandingPageIcons.PercetakanIcon />,
    category: "jasa",
  },
  {
    name: "Catering",
    icon: <LandingPageIcons.CateringIcon />,
    category: "jasa",
  },
  {
    name: "Penyewaan Lahan",
    icon: <LandingPageIcons.PenyewaanLahanIcon />,
    category: "sewa-lahan",
  },
];

export default function Subcategory() {
  return (
    <>
      <div className="flex items-center max-w-7xl mx-auto pt-36">
        <h2 className="font-bold uppercase text-xl">Subkategori</h2>
      </div>
      <div className="flex flex-wrap items-center max-w-7xl w-full mx-auto ">
        {subcategories.map((subcategory, index) => (
          <Link
            href={`/${subcategory.category}/${subcategory.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
            key={index}
            className="w-1/6 p-4 group transition-all duration-300 border h-40"
          >
            <div className="flex flex-col items-center group-hover:scale-90 transition-all duration-300">
              {subcategory.icon}
              <p className="text-center">{subcategory.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
