'use client';

import { useState } from 'react';

import Icon from '@/components/Icon';
import { speak } from '@/services/speech';

type Contact = {
  category: string;
  name: string;
  description: string;
  phone: string;
  phoneLabel: string;
  icon: 'shield' | 'users' | 'phone';
};

const contacts: Contact[] = [
  {
    category: 'PENDAMPINGAN HUKUM',
    name: 'LBH Jakarta',
    description:
      'Pendampingan dan konsultasi hukum gratis untuk masyarakat miskin, buta hukum, dan tertindas.',
    phone: '0213145518',
    phoneLabel: '021 314 5518',
    icon: 'shield' as const,
  },
  {
    category: 'HAK ASASI MANUSIA',
    name: 'Komnas HAM',
    description:
      'Pengaduan dugaan pelanggaran hak asasi manusia dan tindakan diskriminatif.',
    phone: '0213925230',
    phoneLabel: '021 392 5230',
    icon: 'users' as const,
  },
  {
    category: 'LAYANAN PEMERINTAH',
    name: 'Kementerian Sosial',
    description:
      'Layanan informasi, pengaduan, dan rujukan bantuan sosial melalui pusat layanan 171.',
    phone: '171',
    phoneLabel: '171',
    icon: 'phone' as const,
  },
];

export default function HelpPage() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const readContact = (contact: Contact) => {
    speak(`${contact.name}. ${contact.description}`);
  };

  const confirmCall = (contact: Contact) => {
    setSelectedContact(contact);
    speak(
      `Apakah Anda yakin akan menelepon ${contact.name} di nomor ${contact.phoneLabel}? Tombol batal ada di kiri. Tombol hubungi ada di kanan.`
    );
  };

  const cancelCall = () => {
    setSelectedContact(null);
    speak('Panggilan dibatalkan.');
  };

  const makeCall = () => {
    if (!selectedContact) return;
    const contact = selectedContact;
    speak(`Menghubungi ${contact.name}.`);
    window.location.href = `tel:${contact.phone}`;
    setSelectedContact(null);
  };

  return (
    <div className="page">
      <header className="page-heading">
        <p className="eyebrow">RUJUKAN DAN PENDAMPINGAN</p>
        <h1>Kontak Darurat dan Pendampingan</h1>
      </header>

      <section className="contact-grid">
        {contacts.map((contact) => (
          <article className="contact-card" key={contact.name}>
            <button
              className="contact-card__read"
              onClick={() => readContact(contact)}
              aria-label={`Dengarkan informasi ${contact.name}`}
            >
              <div className="contact-card__heading">
                <span>
                  <Icon name={contact.icon} width={25} height={25} />
                </span>
                <div>
                  <p>{contact.category}</p>
                  <h2>{contact.name}</h2>
                </div>
              </div>
              <p className="contact-card__description">{contact.description}</p>
              <span className="contact-card__listen">
                <Icon name="volume" width={18} height={18} />
                Tekan kartu untuk dengarkan
              </span>
            </button>
            <button
              className="button button--primary button--full"
              onClick={() => confirmCall(contact)}
            >
              <Icon name="phone" width={19} height={19} />
              Hubungi {contact.phoneLabel}
            </button>
          </article>
        ))}
      </section>

      {selectedContact && (
        <div className="dialog-backdrop" role="presentation">
          <div
            className="call-dialog"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="call-dialog-title"
            aria-describedby="call-dialog-description"
          >
            <span className="call-dialog__icon">
              <Icon name="phone" width={30} height={30} />
            </span>
            <h2 id="call-dialog-title">Konfirmasi Panggilan</h2>
            <p id="call-dialog-description">
              Apakah Anda yakin akan menelepon {selectedContact.name} di nomor{' '}
              {selectedContact.phoneLabel}?
            </p>
            <div className="call-dialog__actions">
              <button className="button button--outline" onClick={cancelCall}>
                Batal
              </button>
              <button className="button button--primary" onClick={makeCall}>
                <Icon name="phone" width={19} height={19} />
                Hubungi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
