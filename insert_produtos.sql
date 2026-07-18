-- =====================================================================
-- INSERT de exemplo para a tabela "produto" (PostgreSQL)
-- 3 produtos para cada uma das 10 categorias do enum Categoria
-- Total: 30 produtos
--
-- AJUSTE NECESSÁRIO: se o nome da sua tabela ou de alguma coluna for
-- diferente (ex: "produtos" no plural, ou "tipo_produto" sem underscore),
-- troque aqui antes de executar.
--
-- Os valores de categoria e tipo_produto são gravados como TEXT,
-- igual ao nome do enum em Java (ex: 'MAQUIAGEM', 'BASE'), que é o
-- comportamento padrão do Hibernate/JPA com @Enumerated(EnumType.STRING).
--
-- SOBRE AS IMAGENS:
-- Usamos o serviço placehold.co, que gera uma imagem de verdade (não é
-- um link quebrado) com o nome do produto escrito nela. É só um espaço
-- reservado visual: serve para testar o layout sem depender de fotos
-- de terceiros. Veja a explicação após o script sobre como trocar por
-- fotos reais do produto de forma correta (sem risco de direitos de
-- imagem ou link instável de loja).
-- =====================================================================

CREATE DATABASE clm_database;

use clm_database;

select * from produto;

INSERT INTO produto (id, nome, descricao, preco, estoque, imagem, categoria, tipo_produto)
VALUES
-- ===================== MAQUIAGEM =====================
(usuarios111, 'Base Líquida Matte HD', 'Base de alta cobertura com acabamento matte e longa duração.', 49.90, 35, 'https://placehold.co/400x400/f5d6c6/4a2c2a?text=Base+Matte+HD', 'MAQUIAGEM', 'BASE'),
(2, 'Batom Líquido Vermelho Clássico', 'Batom líquido de secagem rápida e cor intensa.', 29.90, 50, 'https://placehold.co/400x400/c41e3a/ffffff?text=Batom+Vermelho', 'MAQUIAGEM', 'BATOM'),
(3, 'Máscara de Cílios Volume Extremo', 'Máscara que alonga e dá volume sem borrar.', 34.90, 40, 'https://placehold.co/400x400/1a1a1a/ffffff?text=Mascara+Cilios', 'MAQUIAGEM', 'MASCARA_DE_CILIOS'),

-- ===================== CUIDADOS_COM_A_PELE =====================
(4, 'Hidratante Facial Hialurônico', 'Hidratação profunda com ácido hialurônico para todos os tipos de pele.', 39.90, 60, 'https://placehold.co/400x400/d6ecf0/2a4a4a?text=Hidratante+Facial', 'CUIDADOS_COM_A_PELE', 'HIDRATANTE_FACIAL'),
(5, 'Sérum Vitamina C 20%', 'Sérum antioxidante que uniformiza o tom da pele.', 59.90, 45, 'https://placehold.co/400x400/fff3cd/8a6d1a?text=Serum+Vitamina+C', 'CUIDADOS_COM_A_PELE', 'SERUM'),
(6, 'Sabonete Facial Espuma Suave', 'Limpeza facial sem ressecar a pele.', 24.90, 70, 'https://placehold.co/400x400/e8f4f8/2a5a6a?text=Sabonete+Facial', 'CUIDADOS_COM_A_PELE', 'SABONETE_FACIAL'),

-- ===================== PERFUMARIA =====================
(7, 'Perfume Floral Élégance 100ml', 'Fragrância floral sofisticada com notas de jasmim.', 189.90, 20, 'https://placehold.co/400x400/f0d9e8/5a2a4a?text=Perfume+Elegance', 'PERFUMARIA', 'PERFUME'),
(8, 'Colônia Cítrica Fresh 200ml', 'Colônia refrescante com notas cítricas, ideal para o dia a dia.', 79.90, 30, 'https://placehold.co/400x400/fff0c2/8a6a1a?text=Colonia+Fresh', 'PERFUMARIA', 'COLONIA'),
(9, 'Body Splash Frutas Vermelhas', 'Spray corporal perfumado de longa fixação.', 34.90, 55, 'https://placehold.co/400x400/f7d6dc/8a2a3a?text=Body+Splash', 'PERFUMARIA', 'BODY_SPLASH'),

-- ===================== PROTETOR_SOLAR =====================
(10, 'Protetor Solar Facial FPS 60', 'Proteção facial com toque seco e sem oleosidade.', 54.90, 50, 'https://placehold.co/400x400/fff3e0/8a5a1a?text=Protetor+Facial+60', 'PROTETOR_SOLAR', 'PROTETOR_SOLAR_FACIAL'),
(11, 'Protetor Solar Corporal FPS 30', 'Proteção corporal resistente à água.', 44.90, 65, 'https://placehold.co/400x400/fff3e0/8a5a1a?text=Protetor+Corporal+30', 'PROTETOR_SOLAR', 'PROTETOR_SOLAR_CORPORAL'),
(12, 'Protetor Solar Facial FPS 80 Toque Seco', 'Alta proteção com acabamento invisível.', 64.90, 30, 'https://placehold.co/400x400/fff3e0/8a5a1a?text=Protetor+Facial+80', 'PROTETOR_SOLAR', 'PROTETOR_SOLAR_FACIAL'),

-- ===================== ESMALTERIA =====================
(13, 'Esmalte Vermelho Paixão', 'Esmalte cremoso de alto brilho e longa duração.', 9.90, 100, 'https://placehold.co/400x400/c41e3a/ffffff?text=Esmalte+Vermelho', 'ESMALTERIA', 'ESMALTE'),
(14, 'Esmalte Nude Elegance', 'Tom nude versátil para o dia a dia.', 9.90, 90, 'https://placehold.co/400x400/e8d4c0/5a4530?text=Esmalte+Nude', 'ESMALTERIA', 'ESMALTE'),
(15, 'Removedor de Esmalte sem Acetona', 'Remove esmalte sem ressecar as unhas.', 14.90, 80, 'https://placehold.co/400x400/dbe9f5/2a4a6a?text=Removedor+Esmalte', 'ESMALTERIA', 'REMOVEDOR_DE_ESMALTE'),

-- ===================== TRATAMENTO_FACIAL =====================
(16, 'Creme Anti-Idade Noturno', 'Reduz linhas finas e estimula a renovação celular durante a noite.', 89.90, 25, 'https://placehold.co/400x400/e0d6f0/4a2a6a?text=Anti-Idade+Noturno', 'TRATAMENTO_FACIAL', 'ANTI_IDADE'),
(17, 'Sérum Clareador Facial', 'Atua em manchas e uniformiza o tom da pele.', 74.90, 30, 'https://placehold.co/400x400/fff3cd/8a6d1a?text=Clareador+Facial', 'TRATAMENTO_FACIAL', 'CLAREADOR_FACIAL'),
(18, 'Creme Anti-Idade Olheiras', 'Tratamento específico para a área dos olhos.', 69.90, 28, 'https://placehold.co/400x400/e0d6f0/4a2a6a?text=Anti-Idade+Olheiras', 'TRATAMENTO_FACIAL', 'ANTI_IDADE'),

-- ===================== CORPO_E_BANHO =====================
(19, 'Hidratante Corporal Manteiga de Karité', 'Hidratação intensa para peles secas.', 32.90, 60, 'https://placehold.co/400x400/f0e4d0/6a4a2a?text=Hidratante+Karite', 'CORPO_E_BANHO', 'HIDRATANTE_CORPORAL'),
(20, 'Óleo de Banho Lavanda', 'Óleo relaxante que hidrata durante o banho.', 38.90, 40, 'https://placehold.co/400x400/e6dcf2/4a3a6a?text=Oleo+Lavanda', 'CORPO_E_BANHO', 'OLEO_DE_BANHO'),
(21, 'Hidratante Corporal Coco', 'Loção hidratante de absorção rápida com fragrância de coco.', 29.90, 55, 'https://placehold.co/400x400/f5f0e0/6a5a2a?text=Hidratante+Coco', 'CORPO_E_BANHO', 'HIDRATANTE_CORPORAL'),

-- ===================== ACESSORIOS_DE_BELEZA =====================
(22, 'Pincel para Base Profissional', 'Pincel macio de cerdas sintéticas para aplicação uniforme.', 19.90, 70, 'https://placehold.co/400x400/d8d8d8/3a3a3a?text=Pincel+Base', 'ACESSORIOS_DE_BELEZA', 'PINCEL'),
(23, 'Esponja de Maquiagem Multifuncional', 'Esponja para base, pó e corretivo, formato gota.', 14.90, 90, 'https://placehold.co/400x400/f7d6dc/8a2a3a?text=Esponja+Maquiagem', 'ACESSORIOS_DE_BELEZA', 'ESPONJA_DE_MAQUIAGEM'),
(24, 'Necessaire de Viagem Compacta', 'Necessaire impermeável com diversos compartimentos.', 49.90, 35, 'https://placehold.co/400x400/d0e0e8/2a4a5a?text=Necessaire+Viagem', 'ACESSORIOS_DE_BELEZA', 'NECESSAIRE'),

-- ===================== KITS_E_PRESENTES =====================
(25, 'Kit Presente Skincare Essencial', 'Kit com hidratante, sérum e sabonete facial.', 119.90, 20, 'https://placehold.co/400x400/e8f4f8/2a5a6a?text=Kit+Skincare', 'KITS_E_PRESENTES', 'KIT_PROMOCIONAL'),
(26, 'Kit Presente Perfumaria Deluxe', 'Kit com perfume e body splash combinados.', 159.90, 15, 'https://placehold.co/400x400/f0d9e8/5a2a4a?text=Kit+Perfumaria', 'KITS_E_PRESENTES', 'KIT_PROMOCIONAL'),
(27, 'Kit Maquiagem Básica', 'Kit com base, batom e máscara de cílios.', 99.90, 25, 'https://placehold.co/400x400/f5d6c6/4a2c2a?text=Kit+Maquiagem', 'KITS_E_PRESENTES', 'KIT_PROMOCIONAL'),

-- ===================== PRODUTOS_NATURAIS =====================
(28, 'Hidratante Facial Vegano Aloe Vera', 'Hidratante 100% vegano à base de aloe vera.', 42.90, 40, 'https://placehold.co/400x400/dcf0d8/2a5a2a?text=Hidratante+Vegano', 'PRODUTOS_NATURAIS', 'COSMETICO_VEGANO'),
(29, 'Sabonete Orgânico de Lavanda', 'Sabonete artesanal orgânico, livre de químicos agressivos.', 22.90, 50, 'https://placehold.co/400x400/e6dcf2/4a3a6a?text=Sabonete+Organico', 'PRODUTOS_NATURAIS', 'COSMETICO_ORGANICO'),
(30, 'Óleo Corporal Vegano Amêndoas', 'Óleo corporal vegano nutritivo de amêndoas doces.', 36.90, 38, 'https://placehold.co/400x400/f0e4d0/6a4a2a?text=Oleo+Amendoas', 'PRODUTOS_NATURAIS', 'COSMETICO_VEGANO');

UPDATE produto
SET imagem = 'https://images.tcdn.com.br/img/img_prod/1387763/base_lquida_matte_fand_cosmticos_30g_15_20260424114134_8d3691e8b5ba.jpg'
WHERE nome = 'Base Líquida Matte HD';

UPDATE produto
SET imagem = 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_210,h_210/dpr_2.0/v1/imagens/product/Q56942/00387729-e698-4f6d-bdeb-a7862e87eb05-q56942-batom-liquido-instamatte-cerejali-4ml-aberto.jpg'
WHERE nome = 'Batom Líquido Vermelho Clássico';

UPDATE produto
SET imagem = 'https://m.media-amazon.com/images/I/41WM57UlgfL.jpg'
WHERE nome = 'Máscara de Cílios Volume Extremo';

UPDATE produto
SET imagem = 'https://m.media-amazon.com/images/I/61hacKUBXYL.jpg'
WHERE nome = 'Hidratante Facial Hialurônico';

UPDATE produto
SET imagem = 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_800/v1/imagens/product/Z51364/aa7eb939-feed-4bc7-a53c-c8207c7939ec-51364-1.jpg'
WHERE nome = 'Sérum Vitamina C 20%';

UPDATE produto
SET imagem = 'https://http2.mlstatic.com/D_Q_NP_2X_703130-MLB89860354019_082025-E.webp'
WHERE nome = 'Sabonete Facial Espuma Suave';

UPDATE produto
SET imagem = 'https://emiratesoud.co.uk/cdn/shop/files/Pur-Elegance-Perfume-100ml-EDP-Fragrance-World-126531028.jpg?v=1715473165&width=1946'
WHERE nome = 'Perfume Floral Élégance 100ml';

UPDATE produto
SET imagem = 'https://kosmetikaonline.com/cdn/shop/files/COLONIA_LIVING_FRESH.png?v=1728920152&width=500'
WHERE nome = 'Colônia Cítrica Fresh 200ml';

UPDATE produto
SET imagem = 'https://enfisa.com.br/wp-content/uploads/2025/02/Body-Splash-Instance-Frutas-Vermelhas-da-Eudora.jpg'
WHERE nome = 'Body Splash Frutas Vermelhas';

UPDATE produto
SET imagem = 'https://cdn1.staticpanvel.com.br/produtos/15/93185-15.jpg'
WHERE nome = 'Protetor Solar Facial FPS 60';

UPDATE produto
SET imagem = 'https://http2.mlstatic.com/D_NQ_NP_965957-MLU78604648344_082024-O.webp'
WHERE nome = 'Protetor Solar Corporal FPS 30';

UPDATE produto
SET imagem = 'https://http2.mlstatic.com/D_NQ_NP_738596-MLU76780707272_062024-O.webp'
WHERE nome = 'Protetor Solar Facial FPS 80 Toque Seco';

UPDATE produto
SET imagem = 'https://images.tcdn.com.br/img/img_prod/1027140/vermelho_feito_paixao_esmalte_em_gel_377_1_86041ff68e133ae1b7b1cc87708f3d6c.jpg'
WHERE nome = 'Esmalte Vermelho Paixão';

UPDATE produto
SET imagem = 'https://t41847.vteximg.com.br/arquivos/ids/10710446-220-220/EsmalteImpalaBsicoCremosoNudeClss.jpg?v=638693466360130000'
WHERE nome = 'Esmalte Nude Elegance';

UPDATE produto
SET imagem = 'https://mixdajo.fbitsstatic.net/img/p/removedor-de-esmalte-repos-140ml-sem-acetona-143735/331636.jpg?w=420&h=420&v=no-value'
WHERE nome = 'Removedor de Esmalte sem Acetona';

UPDATE produto
SET imagem = 'https://ikesaki.vtexassets.com/arquivos/ids/226659-800-auto?v=636973232415300000&width=800&height=auto&aspect=true'
WHERE nome = 'Creme Anti-Idade Noturno';

UPDATE produto
SET imagem = 'https://m.media-amazon.com/images/I/51zzp4KytNL.jpg'
WHERE nome = 'Sérum Clareador Facial';

UPDATE produto
SET imagem = 'https://images-na.ssl-images-amazon.com/images/I/41G3NAT+ygL.jpg'
WHERE nome = 'Creme Anti-Idade Olheiras';

UPDATE produto
SET imagem = 'https://static.zattini.com.br/produtos/locao-hidratante-corporal-hidramais-manteiga-de-karite-500ml/60/MPK-0027-460/MPK-0027-460_zoom1.jpg?ts=1694469249&ims=544x'
WHERE nome = 'Hidratante Corporal Manteiga de Karité';

UPDATE produto
SET imagem = 'https://cdn.awsli.com.br/600x1000/2636/2636400/produto/228773513/1-91-bcf0d036f37dc4b76d16861620615000-640-0-b6ry6cd5wm.png'
WHERE nome = 'Óleo de Banho Lavanda';

UPDATE produto
SET imagem = 'https://images.tcdn.com.br/img/img_prod/1379142/hidratante_corporal_agua_de_coco_erva_doce_e_camomila_17_1_de0347a9d7ccfb743fa13bef7d440df6.png'
WHERE nome = 'Hidratante Corporal Coco';

UPDATE produto
SET imagem = 'https://m.media-amazon.com/images/I/31bxKRQSikL.jpg'
WHERE nome = 'Pincel para Base Profissional';

UPDATE produto
SET imagem = 'https://images.tcdn.com.br/img/img_prod/789130/esponja_vizzela_fluffy_blender_34161_1_67357dccc4b5617282ac916f61b0c767.jpg'
WHERE nome = 'Esponja de Maquiagem Multifuncional';

UPDATE produto
SET imagem = 'https://cdn.dooca.store/153029/products/zeoukcjijh9wef9u4wdra5tyvlb3rrlaswmu_640x640+fill_ffffff.jpg?v=1720135116&webp=0'
WHERE nome = 'Necessaire de Viagem Compacta';

UPDATE produto
SET imagem = 'https://adcos.vtexassets.com/arquivos/ids/163357/01_kits_presenteaveis.jpg?v=637860722046800000'
WHERE nome = 'Kit Presente Skincare Essencial';

UPDATE produto
SET imagem = 'https://jequiti.vtexassets.com/arquivos/ids/172059-600-0/311.png.png?v=638799090627300000'
WHERE nome = 'Kit Presente Perfumaria Deluxe';

UPDATE produto
SET imagem = 'https://m.media-amazon.com/images/I/71DVuLF4h7L.jpg'
WHERE nome = 'Kit Maquiagem Básica';

UPDATE produto
SET imagem = 'https://cdn.awsli.com.br/2336/2336267/arquivos/40827e-creme-hidratante-facial-aloe-vera-e-abacate-organic-shop-ingredientes.JPG'
WHERE nome = 'Hidratante Facial Vegano Aloe Vera';

UPDATE produto
SET imagem = 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/e5ec8fad-067e-4ad9-a740-6c85a6f0041b.__CR0,0,1940,1200_PT0_SX970_V1___.png'
WHERE nome = 'Sabonete Orgânico de Lavanda';

UPDATE produto
SET imagem = 'https://http2.mlstatic.com/D_NQ_NP_807561-MLU77662975018_072024-O.webp'
WHERE nome = 'Óleo Corporal Vegano Amêndoas';

ALTER TABLE produto
DROP CONSTRAINT produto_tipo_produto_check;

ALTER TABLE produto
ADD CONSTRAINT produto_tipo_produto_check
CHECK (
	tipo_produto IN (
	'BASE',
	'BATOM',
	'MASCARA_DE_CILIOS',
	'HIDRATANTE_FACIAL',
	'SERUM',
	'SABONETE_FACIAL',
	'PERFUME',
	'COLONIA',
	'BODY_SPLASH',
	'PROTETOR_SOLAR_FACIAL',
	'PROTETOR_SOLAR_CORPORAL',
	'ESMALTE',
	'REMOVEDOR_DE_ESMALTE',
	'ANTI_IDADE',
	'CLAREADOR_FACIAL',
	'HIDRATANTE_CORPORAL',
	'OLEO_DE_BANHO',
	'PINCEL',
	'ESPONJA_DE_MAQUIAGEM',
	'NECESSAIRE',
	'KIT_PROMOCIONAL',
	'COSMETICO_VEGANO',
	'COSMETICO_ORGANICO',
	'OUTROS_ACESSORIOS'
));

INSERT INTO produto (nome, descricao, preco, estoque, imagem, categoria, tipo_produto)
VALUES
('Pincel Kabuki Profissional', 'Ideal para aplicação uniforme de base e pó.', 49.90, 20, 'https://tfczxi.vtexassets.com/arquivos/ids/176946-800-auto?v=638096509239830000&width=800&height=auto&aspect=true', 'ACESSORIOS_DE_BELEZA', 'PINCEL'),
('Pincel para Delineado', 'Pincel fino para delineados precisos.', 22.90, 18, 'https://http2.mlstatic.com/D_Q_NP_2X_975891-MLU74971476679_032024-E.webp', 'ACESSORIOS_DE_BELEZA', 'PINCEL'),
('Pincel para Blush', 'Cerdas macias para aplicação de blush.', 39.90, 25, 'https://http2.mlstatic.com/D_Q_NP_2X_805598-MLA92367533506_092025-E.webp', 'ACESSORIOS_DE_BELEZA', 'PINCEL');

INSERT INTO produto (nome, descricao, preco, estoque, imagem, categoria, tipo_produto)
VALUES
('Necessaire Rosa Premium', 'Necessaire espaçosa para organizar seus cosméticos.', 59.90, 10, 'https://m.media-amazon.com/images/I/41i9ZscLeNL.jpg', 'ACESSORIOS_DE_BELEZA', 'NECESSAIRE'),
('Necessaire Transparente', 'Ideal para viagens e organização.', 39.90, 22, 'https://m.media-amazon.com/images/I/61pL0LiFpfL.jpg', 'ACESSORIOS_DE_BELEZA', 'NECESSAIRE'),
('Necessaire Floral', 'Modelo compacto com estampa floral.', 44.90, 15, 'https://m.media-amazon.com/images/I/91+NI14rsPL.jpg', 'ACESSORIOS_DE_BELEZA', 'NECESSAIRE'),
('Necessaire Luxo Preta', 'Necessaire elegante com acabamento premium.', 69.90, 8, 'https://dptafza4tn3d0.cloudfront.net/cache/catalog/CV33824/necessaire-prada-nylon-preta-CV33824(2)-507x634.png', 'ACESSORIOS_DE_BELEZA', 'NECESSAIRE');

INSERT INTO produto (nome, descricao, preco, estoque, imagem, categoria, tipo_produto)
VALUES
('Curvador de Cílios', 'Modela os cílios com conforto e precisão.', 34.90, 20, 'https://cdn.awsli.com.br/600x1000/1641/1641981/produto/62570190/e370d6d6d6.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Apontador Duplo para Lápis', 'Compatível com lápis fino e grosso.', 14.90, 40, 'https://http2.mlstatic.com/D_Q_NP_2X_919660-MLB50182491143_062022-E-apontador-duplo-para-lapis-de-maquiagem-macrilan-make-up.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Espelho de Bolsa', 'Espelho compacto para levar na bolsa.', 29.90, 28, 'https://http2.mlstatic.com/D_Q_NP_2X_822237-MLB94036049646_102025-V-kit-05-espelho-redondo-mo-bolsa-colorido-mes-rosa-aumento.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Organizador de Maquiagem', 'Organizador acrílico para bancada.', 89.90, 8, 'https://cdn.leroymerlin.com.br/products/organizador_de_maquiagem_4_gavetas_com_bandeja_para_batom_1567805433_1da7_600x600.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Faixa para Skincare', 'Faixa macia para prender os cabelos durante os cuidados com a pele.', 24.90, 35, 'https://http2.mlstatic.com/D_Q_NP_2X_816699-MLB92772774408_092025-E-tiara-faixa-laco-maquiagem-skincare-limpeza-facial.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Porta Pincéis Acrílico', 'Organizador transparente para pincéis.', 54.90, 12, 'https://images.tcdn.com.br/img/img_prod/679464/180_pote_acrilico_porta_pinceis_maquiagem_com_9_nichos_7_2_4cbae4ed66296e25b1e7170b996dac28.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Pincel para Sobrancelha', 'Pincel chanfrado ideal para preencher e definir as sobrancelhas.', 18.90, 30, 'https://http2.mlstatic.com/D_Q_NP_2X_724825-MLU72461324494_102023-E.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Pinça para Sobrancelha', 'Pinça de precisão para remoção de pelos com facilidade.', 16.90, 35, 'https://http2.mlstatic.com/D_Q_NP_2X_614326-MLA90927145216_082025-E.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Lixa de Unha', 'Lixa resistente para modelar e cuidar das unhas.', 4.90, 100, 'https://images.tcdn.com.br/img/img_prod/1222376/180_pacote_com_100_mini_lixas_de_unha_rosa_9_cm_landhs_47_2_09bf1d476546a4c1b90162d4acb7bf62.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Cílios Postiços', 'Cílios postiços para complementar diferentes estilos de maquiagem.', 15.90, 60, 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_avif,fl_progressive,q_auto:eco,w_210,h_210/dpr_2.0/v1/imagens/product/651394/2676228c-5cda-45d1-ba20-1c07d19e599c-2024-09-26t082025264127972-651394-65d4b5eac4936428e5551c86.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Aplicador de Máscara de Cílios', 'Aplicador reutilizável para separar e modelar os cílios.', 11.90, 25, 'https://http2.mlstatic.com/D_Q_NP_2X_602902-MLB82156844421_012025-E-aplicador-protetor-mascara-de-cilios-rimel-olhos-maquiagem.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Touca de Cetim', 'Touca de cetim que ajuda a proteger os cabelos durante o sono.', 29.90, 30, 'https://m.media-amazon.com/images/I/51nsUtAPR+L.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Rolo Facial Massageador', 'Massageador facial para auxiliar nos cuidados com a pele.', 49.90, 15, 'https://m.media-amazon.com/images/I/41xT5JgB1DL.jpg', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS'),
('Garrafa Spray para Cabelo', 'Frasco spray para aplicação de produtos capilares.', 14.90, 35, 'https://i.ebayimg.com/images/g/qrkAAOSwkbhjScKC/s-l960.webp', 'ACESSORIOS_DE_BELEZA', 'OUTROS_ACESSORIOS');
