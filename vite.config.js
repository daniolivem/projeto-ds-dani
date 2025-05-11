/* Configuração do Vite para o projeto */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* Exporta a configuração */
export default defineConfig({
  plugins: [react()], /* Plugin para suporte ao React */
  test: {
    environment: 'jsdom', /* Ambiente para testes com React */
    setupFiles: './src/setupTests.js', /* Arquivo de configuração para testes */
  },
});