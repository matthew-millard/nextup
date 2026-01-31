interface Props {
  className?: string;
}

function Logo({ className = "" }: Props) {
  return (
    <p className={`font-semibold text-3xl leading-normal text-[#212121] text-center ${className}`}>
      Nextup
    </p>
  );
}

export { Logo };
