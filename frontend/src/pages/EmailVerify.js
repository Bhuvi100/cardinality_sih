import requireAuth from "../utils/requireAuth";
import { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../utils/auth";
import RouteHelper from "../utils/routeHelper";

export default function EmailVerify() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requireAuth("/login", false).then((data) => {
      if (data.user.email_verified) {
        RouteHelper.redirect("/dashboard");
      }

      setUser(data.user);
    });
  }, []);

  function handleSendVerificationEmail() {
    toast.promise(auth().sendVerificationEmail(), {
      pending: {
        render() {
          setIsLoading(true);
          return "Sending Email......";
        },
      },
      success: {
        render() {
          setIsLoading(false);
          return "Verification Email sent. Please check your Inbox!";
        },
      },
      error: {
        render({ data }) {
          setIsLoading(false);
          data = data.response.data;
          return "Something went wrong!";
        },
      },
    });
  }

  return (
    <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
      <MDBContainer className="mt-5 px-2 mb-5">
        <MDBRow className="row d-flex justify-content-center">
          <MDBCard
            alignment="center"
            style={{ maxWidth: "30rem" }}
            className="shadow"
          >
            <MDBCardHeader tag={"h3"} className={"text-lg"}>
              Email Verification
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                You need to verify your email to continue. Please check your
                inbox for the verification email.
              </MDBCardText>
              <MDBBtn
                disabled={isLoading}
                onClick={handleSendVerificationEmail}
              >
                {isLoading ? "Sending...." : "Resend Verification Email"}
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
