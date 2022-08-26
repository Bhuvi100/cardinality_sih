import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import auth from "../utils/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouteHelper from "../utils/routeHelper";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccessful, setResetSuccessful] = useState(false)

  const { token } = useParams();

  useEffect(() => {
    // auth()
    //   .fetchUser()
    //   .then((response) => {
    //     if (response.isAuth) {
    //       RouteHelper.redirect("/dashboard");
    //     }
    //   });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    let data = new FormData(e.target);
    data.append("token", token);

    toast.promise(
      axios().post(token ? "/auth/reset" : "/auth/send_reset", data),
      {
        pending: {
          render() {
            setIsLoading(true);
            return "Submitting...";
          },
        },
        success: {
          render() {
            setIsLoading(false);
            if (!token) {
              return "Password reset link sent successfully!. Please check your email for further instructions."
            }

            setResetSuccessful(true)
            return "Password reset successful! Please login to continue.";
          },
        },
        error: {
          render({ data }) {
            setIsLoading(false);
            let status = data.response.status;
            data = data.response.data;
            if (status === 422) {
              return Object.values(data.errors)[0].toString();
            } else {
              return "Something went wrong!";
            }
          },
        },
      }
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center mt-4 mb-4">
      <MDBContainer className="mt-4 px-2 mb-4">
        <MDBRow className="row d-flex justify-content-center">
          <MDBCol md="6">
            <MDBCard className="my-4">
              <MDBCardBody className="shadow">
                <h3 className="text-center"> Reset Password </h3>
                {resetSuccessful ? <div className={"text-center p-4"}><MDBBtn
                    className="shadow"
                    color="danger"
                    disabled={isLoading}
                    href={"/login"}
                >
                  Goto Login Page
                </MDBBtn></div> : <form onSubmit={handleSubmit}>
                  <div>
                    <div className="text-dark">
                      <br></br>
                      <h6 className="mb-2 pb-1 fw-bold">Email: </h6>
                      <MDBInput
                          required={true}
                          label="Email"
                          icon="envelope"
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                          name="email"
                      />
                      <br></br>
                      {token && (
                          <div>
                            <h6 className="mb-2 pb-1 fw-bold">New Password: </h6>
                            <MDBInput
                                required={true}
                                label="Password"
                                icon="password"
                                group
                                type="password"
                                validate
                                error="wrong"
                                success="right"
                                name="password"
                            />
                            <br></br>
                            <h6 className="mb-2 pb-1 fw-bold">
                              New Password Confirmation:{" "}
                            </h6>
                            <MDBInput
                                required={true}
                                label="Password Confirmation"
                                icon="password"
                                group
                                type="password"
                                validate
                                error="wrong"
                                success="right"
                                name="password_confirmation"
                            />
                            <br></br>
                          </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center py-3">
                    <MDBBtn
                        className="shadow"
                        color="danger"
                        disabled={isLoading}
                        type="submit"
                    >
                      {isLoading ? "Submitting...." : "Reset"}
                    </MDBBtn>
                  </div>
                </form>}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
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
