import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const QuillEditor = styled(ReactQuill)``;
