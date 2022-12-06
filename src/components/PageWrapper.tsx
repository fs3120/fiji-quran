import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Box flexDirection="column" gap={gap || 0} p={2}>
          {children}
        </Box>
      </HelmetProvider>
    </>
  );
}
