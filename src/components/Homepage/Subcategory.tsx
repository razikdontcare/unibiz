import type { SubcategoryType } from "@/types";
import LandingPageIcons from "@/components/icons/landingPageIcons";

const subcategories: SubcategoryType[] = [
  {
    name: "Merchandise Kampus",
    icon: <LandingPageIcons.MerchandiseKampusIcon />,
  },
  {
    name: "Alat Tulis Kantor",
    icon: <LandingPageIcons.AlatTulisKantorIcon />,
  },
  {
    name: "Makanan dan Minuman",
    icon: <LandingPageIcons.MakananDanMinumanIcon />,
  },
  {
    name: "Sewa Fasilitas",
    icon: <LandingPageIcons.SewaFasilitasIcon />,
  },
  {
    name: "Layanan Digital",
    icon: <LandingPageIcons.LayananDigitalIcon />,
  },
  {
    name: "Produk Kreatif Mahasiswa",
    icon: <LandingPageIcons.ProdukKreatifMahasiswaIcon />,
  },
  {
    name: "Kursus dan Pelatihan",
    icon: <LandingPageIcons.KursusDanPelatihanIcon />,
  },
  {
    name: "Layanan Konsultasi",
    icon: <LandingPageIcons.LayananKonsultasiIcon />,
  },
  {
    name: "Aplikasi dan Software",
    icon: <LandingPageIcons.AplikasiDanSoftwareIcon />,
  },
  {
    name: "Obat dan Farmasi",
    icon: <LandingPageIcons.ObatDanFarmasiIcon />,
  },
  {
    name: "Robotik dan Elektronik",
    icon: <LandingPageIcons.RobotikDanElektronikIcon />,
  },
  {
    name: "Seni dan Tari",
    icon: <LandingPageIcons.SeniDanTariIcon />,
  },
  {
    name: "Pengolahan Data",
    icon: <LandingPageIcons.PengolahanDataIcon />,
  },
  {
    name: "Percetakan",
    icon: <LandingPageIcons.PercetakanIcon />,
  },
  {
    name: "Catering",
    icon: <LandingPageIcons.CateringIcon />,
  },
  {
    name: "Penyewaan Lahan",
    icon: <LandingPageIcons.PenyewaanLahanIcon />,
  },
];

export default function Subcategory() {
  return (
    <>
      <div className="flex flex-wrap items-center w-full max-w-7xl mx-auto">
        {subcategories.map((subcategory, index) => (
          <div key={index} className="w-1/6 p-4">
            <div className="flex flex-col items-center">
              {subcategory.icon}
              <p className="text-center">{subcategory.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
