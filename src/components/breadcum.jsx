import { Link } from "react-router-dom";
import "./breadcum.css"

const Breadcrumb = ({ one, two }) => {
    return (
        <div className="breadcrumb-container" aria-label="breadcrumb">
            <ul className="breadcrumb-list">
                {/* Home */}
                <li className="breadcrumb-item">
                    <Link href="/" className="breadcrumb-link">
                        <svg
                            className="breadcrumb-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </Link>
                </li>

                {/* One */}
                <li className="breadcrumb-item">
                    <div className="breadcrumb-separator">
                        <svg
                            className="separator-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="breadcrumb-link">{one}</span>
                    </div>
                </li>

                {/* Two */}
                <li className="breadcrumb-item current" aria-current="page">
                    <div className="breadcrumb-separator">
                        <svg
                            className="separator-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="breadcrumb-current">{two}</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumb;
