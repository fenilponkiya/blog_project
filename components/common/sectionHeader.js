import Image from "next/image";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Image height={10} width={4} alt="Comment" src="/images/Rectangle.svg" />
      <h2 className="text-xl font-medium text-dark">{title}</h2>
    </div>
  );
};

export default SectionHeader;
