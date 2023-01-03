import Typography from "@mui/material/Typography";

interface StringToHTMLProps {
  text: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  fontSize?: number;
  fontWeight?: number;
  sx?: any;
}

export default function StringToHTML({
  text,
  variant,
  fontSize,
  fontWeight,
  sx,
}: StringToHTMLProps) {
  return (
    <Typography
      variant={variant || "body1"}
      fontSize={fontSize}
      fontWeight={fontWeight}
      sx={sx}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
