import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const {
    state: { email, fullName },
  } = useLocation();

  return (
    <div className="container">
      <h1>Thank You !</h1>
      {email && (
        <>
          <p>
            <strong>{fullName}</strong> You`re now registered for Red30 Tech.
          </p>
          <p>
            we have sent your details to <strong>{email}</strong>
          </p>
        </>
      )}
    </div>
  );
}
