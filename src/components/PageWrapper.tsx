import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface PageWrapperProps {
  title: string;
  gap?: number;
  children: ReactNode;
}

export default function PageWrapper({
  title,
  gap,
  children,
}: PageWrapperProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box flexDirection="column" gap={gap || 0} p={2}>
        {children}
      </Box>
    </>
  );
}
