import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Verify = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.createSucess) {
    return <Redirect to="/Register" />;
  }
  return (
    <section className="container">
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <table
        id="main"
        width="100%"
        height="100%"
        cellPadding={0}
        cellSpacing={0}
        border={0}
        bgcolor="#F4F7FA"
      >
        <tbody>
          <tr>
            <td valign="top">
              <table
                className="innermain"
                cellPadding={0}
                width={580}
                cellSpacing={0}
                border={0}
                bgcolor="#F4F7FA"
                align="center"
                style={{ margin: "0 auto", tableLayout: "fixed" }}
              >
                <tbody>
                  {/* START of MAIL Content */}
                  <tr>
                    <td colSpan={4}>
                      {/* Logo start here */}
                      <table
                        className="logo"
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                      >
                        <tbody>
                          <tr>
                            <td colSpan={2} height={30} />
                          </tr>
                          <tr>
                            <td colSpan={2} height={30} />
                          </tr>
                        </tbody>
                      </table>
                      {/* Logo end here */}
                      {/* Main CONTENT */}
                      <table
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                        bgcolor="#ffffff"
                        style={{
                          borderRadius: "4px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td height={40} />
                          </tr>
                          <tr
                            style={{
                              fontFamily:
                                '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
                              color: "#4E5C6E",
                              fontSize: "14px",
                              lineHeight: "20px",
                              marginTop: "20px",
                            }}
                          >
                            <td
                              className="content"
                              colSpan={2}
                              valign="top"
                              align="center"
                              style={{
                                paddingLeft: "90px",
                                paddingRight: "90px",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding={0}
                                cellSpacing={0}
                                border={0}
                                bgcolor="#ffffff"
                              >
                                <tbody>
                                  <tr>
                                    <td height={30} />
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      {" "}
                                      <span
                                        style={{
                                          color: "#48545d",
                                          fontSize: "22px",
                                          lineHeight: "24px",
                                        }}
                                      >
                                        Verify your email address
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height={24} />
                                  </tr>
                                  <tr>
                                    <td height={1} bgcolor="#DAE1E9" />
                                  </tr>
                                  <tr>
                                    <td height={24} />
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      {" "}
                                      <span
                                        style={{
                                          color: "#48545d",
                                          fontSize: "14px",
                                          lineHeight: "24px",
                                        }}
                                      >
                                        We send a link to your email address,
                                        please check your email and verify your
                                        email.
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height={20} />
                                  </tr>
                                  <tr>
                                    <td valign="top" width="48%" align="center">
                                      {" "}
                                      <span>
                                        <a
                                          href="https://mail.google.com/"
                                          style={{
                                            display: "block",
                                            padding: "15px 25px",
                                            backgroundColor: "#17a2b8",
                                            color: "#ffffff",
                                            borderRadius: "3px",
                                            textDecoration: "none",
                                          }}
                                        >
                                          Check Your Email
                                        </a>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td height={20} />
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td height={60} />
                          </tr>
                        </tbody>
                      </table>
                      {/* Main CONTENT end here */}
                      {/* PROMO column start here */}
                      {/* Show mobile promo 75% of the time */}
                      <table
                        id="promo"
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        border={0}
                        style={{ marginTop: "20px" }}
                      >
                        <tbody>
                          <tr>
                            <td colSpan={2} height={20} />
                          </tr>
                          <tr>
                            <td colSpan={2} height={20} />
                          </tr>
                          <tr>
                            <td height={50}></td>
                          </tr>
                        </tbody>
                      </table>
                      {/* FOOTER end here */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Verify;
