# Smart School (Static)

פרויקט זה מוכן לפריסה סטטית ב‑Render.

## מבנה
- `client/` – אפליקציית React
- `render.yaml` – תצורת Render (Blueprint)

## הרצה מקומית
```bash
cd client
npm install
npm start
```

## בנייה
```bash
cd client
npm install
npm run build
```

## פריסה ב‑Render (הכי פשוט)
1. העלי את התיקייה `smart-school-static` לגיטהב כריפו חדש.
2. ב‑Render: New → **Blueprint**
3. בחרי את הריפו. Render יזהה את `render.yaml` ויפרס אוטומטית.

## הערות
- הקישור לפרוספקט: `client/public/prospectus-smart-school.pdf`
- כל הניווט עובד כ‑SPA בזכות ה‑rewrite ב‑`render.yaml`
