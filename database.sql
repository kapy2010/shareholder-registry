create database shareholder_db;

\c shareholder_db;

create table company (id serial primary key, name varchar(50) not null, valuation varchar(100), created_at varchar(25));
create table investor (id serial primary key, name varchar(50) not null);

insert into company(name, valuation, created_at) values('Company A AS', '450,000,000.00', to_char(now()::date, 'MonthDD, YYYY'));
insert into company(name, valuation, created_at) values('Company B AS', '187,500,000.00', to_char(now()::date, 'MonthDD, YYYY'));

insert into investor(name) values('Invest AS');
insert into investor(name) values('Pirate Shipping AS');
insert into investor(name) values('Cayman Holding AS');
insert into investor(name) values('Grey Consulting AS');
insert into investor(name) values('KeyStone Invest AS');
insert into investor(name) values('Petite Capital AS');
insert into investor(name) values('Pia Person');
insert into investor(name) values('H.C. Capital AS');
insert into investor(name) values('Grande Capital AS');
insert into investor(name) values('Hans Herremann');

create table registry (
  id serial primary key,
  company_id integer references company(id),
  investor_id integer references investor(id),
  ownership real,
  number_of_shares bigint,
  share_number varchar(100),
  color varchar(10)
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company A AS'),
  (select id from investor where name='Pirate Shipping AS'),
  31.50,
  37800,
  '1-37,800',
  '#295D9B'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company A AS'),
  (select id from investor where name='Cayman Holding AS'),
  30.50,
  36600,
  '37,801-74,400',
  '#4E92DF'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company A AS'),
  (select id from investor where name='Grey Consulting AS'),
  18.00,
  21600,
  '74,401-96,000',
  '#71CDFD'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company A AS'),
  (select id from investor where name='KeyStone Invest AS'),
  15.66,
  18792,
  '96,001-114,793',
  '#58E2C2'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company A AS'),
  (select id from investor where name='Invest AS'),
  4.33,
  5196,
  '114,794-119,988',
  '#79DD7A'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company A AS'),
  (select id from investor where name='Petite Capital AS'),
  0.01,
  12,
  '119,989-120,000',
  '#D4FED4'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company B AS'),
  (select id from investor where name='Invest AS'),
  25.00,
  25000,
  '1-25,000',
  '#4E92DF'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company B AS'),
  (select id from investor where name='Grande Capital AS'),
  24.50,
  24500,
  '25,001-49,500',
  '#71CDFD'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company B AS'),
  (select id from investor where name='H.C. Capital AS'),
  24.50,
  24500,
  '49,501-74,000',
  '#58E2C2'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company B AS'),
  (select id from investor where name='Pia Person'),
  13.50,
  13500,
  '74,001-87,500',
  '#79DD7A'
);

insert into registry (
  company_id, 
  investor_id, 
  ownership, 
  number_of_shares, 
  share_number,
  color
) values (
  (select id from company where name='Company B AS'),
  (select id from investor where name='Hans Herremann'),
  12.50,
  12500,
  '87,501-100,000',
  '#D4FED4'
);

create table portfolio (
  id serial primary key,
  investor_id integer references investor(id),
  company_id integer references company(id),
  number_of_shares bigint,
  diluted real,
  original_investments bigint,
  value_of_investments bigint,
  ROI bigint,
  color varchar(10)
);

insert into portfolio (
  investor_id,
  company_id, 
  number_of_shares, 
  diluted,
  original_investments,
  value_of_investments,
  ROI,
  color
) values (
  (select id from investor where name='Invest AS'),
  (select id from company where name='Company A AS'),
  5196,
  4.33,
  67548,
  19485000,
  28746,
  '#44DDA3'
);

insert into portfolio (
  investor_id,
  company_id, 
  number_of_shares, 
  diluted,
  original_investments,
  value_of_investments,
  ROI,
  color
) values (
  (select id from investor where name='Invest AS'),
  (select id from company where name='Company B AS'),
  25000,
  25.00,
  3375000,
  46875000,
  1289,
  '#4E92DF'
);

