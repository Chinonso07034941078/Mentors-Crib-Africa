# MCA brand image refresh — 3 November 2026

Source: owner-provided MCA Brand Identity folder, https://drive.google.com/drive/folders/1CXg_aKJaE9J_7fh1j61XXYOVrIitf2Zv

All seven original files were uploaded to Cloudinary cloud `fv2eljrd` under `mentors-crib/brand/`. Raw downloads match the Drive originals byte for byte. Delivery URLs use automatic format/quality and transparent-margin trimming for logo lockups; the original artwork is unchanged.

- `identity-a1`: cyan transparent lockup, used on the cobalt invitation section.
- `identity-a2`: blue/cyan transparent lockup, used in navigation, publisher marks and favicon.
- `identity-a3`: original colour guide, shown in the Gallery identity edition.
- `identity-1`: original cobalt identity board, shown in Gallery.
- `identity-2`: original light identity board, shown in Gallery.
- `identity-3`: large transparent lockup, used in the home hero stamp.
- `identity-4`: white transparent lockup, used in the footer.

Shared URLs live in `client/src/lib/brandAssets.js`. Cropped/oversized legacy CSS logo scales have been replaced by contain sizing so the full mark remains visible. The gallery repeats have distinct React keys. The broken `/manus-storage/` favicon reference now points at the active cloud.

The active JSX application already stores its main photographs and video in `client/public/assets`; these existing photos, founder image, hubs and community content are retained. The supplied Drive folder contains brand identities, not replacement community photos.

Validation: production build passed; all seven raw uploads have identical SHA256 values to the Drive sources; all seven optimized image derivatives loaded successfully. The custom domain www.mentorscrib.com returned a connection error before this change; its hosting status must be distinguished from image delivery.
