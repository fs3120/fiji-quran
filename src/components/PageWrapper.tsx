import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface PageWrapperProps {
  title: string;
  gap?: number;
  sx?: SxProps<Theme> | undefined;
  children: ReactNode;
}

export default function PageWrapper({
  title,
  gap,
  sx,
  children,
}: PageWrapperProps) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Box display="flex" flexDirection="column" gap={gap || 0} sx={sx}>
          {children}
        </Box>
      </HelmetProvider>
    </>
  );
}
