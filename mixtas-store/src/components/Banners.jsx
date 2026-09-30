import { Container, Row, Col, Button } from "react-bootstrap";

export default function Banners() {
    return (
        <Container className="my-5">
            <Row className="g-3">
                {/* البانر الأول - اليسار (شاب يرتدي هودي رمادي) */}
                <Col md={6}>
                    <div
                        className="p-4 p-md-5 rounded-3 d-flex flex-column justify-content-between text-start"
                        style={{
                            backgroundColor: "#f2f3f7",
                            backgroundImage: "url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: "420px",
                        }}
                    >
                        <div>
                            <span className="text-uppercase text-muted small fw-semibold d-block mb-1">
                                ETHEREAL ELEGANCE
                            </span>
                            <h2 className="fw-bold text-dark lh-sm mb-3">
                                Where Dreams <br />
                                Meet Couture
                            </h2>
                        </div>
                        <div>
                            <Button
                                variant="light"
                                size="sm"
                                className="bg-white text-dark border-0 px-3 py-2 fw-semibold rounded-1 shadow-sm"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </Col>

                {/* العمود الأيمن */}
                <Col md={6}>
                    <Row className="g-3">
                        {/* البانر الأعلى يمين (فتاة يرتدي جاكيت كحلي) */}
                        <Col xs={12}>
                            <div
                                className="p-4 rounded-3 d-flex flex-column justify-content-between text-start"
                                style={{
                                    backgroundColor: "#f2f3f7",
                                    backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "top center",
                                    minHeight: "200px",
                                }}
                            >
                                <div>
                                    <span className="text-uppercase text-muted small fw-semibold d-block mb-1">
                                        RADIANT REVERIE
                                    </span>
                                    <h3 className="fw-bold text-dark fs-4 mb-2">
                                        Enchanting Styles <br />
                                        for Every Woman
                                    </h3>
                                </div>
                                <div>
                                    <Button
                                        variant="light"
                                        size="sm"
                                        className="bg-white text-dark border-0 px-3 py-1 fw-semibold rounded-1 shadow-sm"
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        {/* البانر الأسفل يسار (حذاء رياضي) */}
                        <Col xs={6}>
                            <div
                                className="p-3 p-md-4 rounded-3 d-flex flex-column justify-content-between text-start h-100"
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    backgroundImage: "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop')",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom right",
                                    minHeight: "200px",
                                }}
                            >
                                <div>
                                    <span className="text-uppercase text-muted extra-small fw-semibold d-block mb-1">
                                        URBAN STRIDES
                                    </span>
                                    <h4 className="fw-bold text-dark fs-6 mb-2">
                                        Chic Footwear for <br />
                                        City Living
                                    </h4>
                                </div>
                                <div>
                                    <Button
                                        variant="light"
                                        size="sm"
                                        className="bg-white text-dark border-0 px-2 py-1 fs-7 fw-semibold rounded-1 shadow-sm"
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        {/* البانر الأزرق (خصم 50%) */}
                        <Col xs={6}>
                            <div
                                className="p-3 p-md-4 rounded-3 d-flex flex-column align-items-center justify-content-center text-center text-white h-100"
                                style={{
                                    backgroundColor: "#54738c",
                                    minHeight: "200px",
                                }}
                            >
                                <p className="mb-1 small fw-medium opacity-90">
                                    Trendsetting Bags for Her
                                </p>
                                <h2 className="display-4 fw-bold my-1">50%</h2>
                                <Button
                                    variant="light"
                                    size="sm"
                                    className="bg-white text-dark border-0 px-3 py-1 fs-7 fw-semibold rounded-1 shadow-sm mt-2"
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}