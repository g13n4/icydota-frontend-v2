export default function getLaneFormatting(
  value: number | null,
) {
          switch (value) {
            case 1:
                return 'Bot';
            case 2:
                return 'Mid';
            case 3:
                return 'Top';
            default:
                return null;
        }
}
