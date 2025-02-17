interface UnitCertificateProps {
  name: string;
  year: number;
}
export function UnitCertificate({ name, year }: UnitCertificateProps) {
  return <>
    <div className="box">
      <div className="img">
      </div>
      <h1>{name}</h1>
      <span>{year}</span>
    </div>
  </>;
}
