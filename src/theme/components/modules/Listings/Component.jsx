import {
  ModuleFields,
  TextField,
  ImageField,
  RepeaterField,
  RichTextField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';

export function Component({ fieldValues }) {
  return (
    <div style={{ padding: '40px 20px', background: '#f9f9f9' }}>
      {fieldValues.sections.map((section, index) => (
        <section key={index} style={{ marginBottom: '60px' }}>
          <h2>{section.title}</h2>
          <div
            className="listings-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            {section.items.map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src={item.image?.src}
                  alt={item.image?.alt || ''}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
                <div style={{ padding: '15px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                    {item.location}
                  </div>
                  <div style={{ color: '#666', fontSize: '14px' }}>
                    ⭐ {item.rating} · {item.distance}
                  </div>
                  <div style={{ color: '#666', fontSize: '14px' }}>
                    {item.dates}
                  </div>
                  <div style={{ marginTop: '6px', fontWeight: '600' }}>
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <RepeaterField name="sections" label="Listing Sections" addLabel="Add section">
      <TextField name="title" label="Section Title" default="Trending in Joburg" />
      <RepeaterField name="items" label="Listings" addLabel="Add listing">
        <ImageField name="image" label="Image" resizable={true} />
        <TextField name="location" label="Location" />
        <TextField name="rating" label="Rating (e.g. 4.8)" />
        <TextField name="distance" label="Distance (e.g. 2 km away)" />
        <TextField name="dates" label="Dates (e.g. 12–17 Aug)" />
        <TextField name="price" label="Price (e.g. R3,400)" />
      </RepeaterField>
    </RepeaterField>
  </ModuleFields>
);

export const meta = {
  label: 'Listings Grid',
};
