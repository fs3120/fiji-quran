import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface PageWrapperProps {
  title: string;
  gap?: number;
  noGap?: boolean;
  children: ReactNode;
}

export default function PageWrapper({
  title,
  gap,
  noGap,
  children,
}: PageWrapperProps) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Box flexDirection="column" gap={gap || 0} mt={noGap ? 0 : 1}>
          {children}
        </Box>
      </HelmetProvider>
    </>
  );
}
