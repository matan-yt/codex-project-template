# Event seating

Public, mobile-first seating finder for Avia's Bat Mitzvah.

## Configure before deployment

Edit `src/config/site.ts`:

- `sheetName` and `sheetGid`: the tab containing the seating list
- `heroImagePath`: path to the supplied hero image, currently `/images/avia-hero.jpg`

The Google Sheet must be shared publicly as **Anyone with the link can view**. It needs the Hebrew columns `שם המוזמן`, `סה\"כ אורחים` (optional), `סטטוס`, and `שולחן`. Only rows marked `מגיע` with a positive table number are displayed.

## Run

```bash
npm install
npm run dev
```

The seating list is requested directly from the public Google Sheet. The “רענון רשימה” action fetches the newest version without a deployment.
