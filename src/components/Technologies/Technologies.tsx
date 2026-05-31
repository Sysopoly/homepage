import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from '../Layout/Section/Section';
import { Badge } from '../ui/Badge/Badge';
import styles from './Technologies.module.css';

const keyTechs = [
  '.NET', 'C#', 'React', 'TypeScript', 'Go', 'Azure', 'PostgreSQL',
  'Docker', 'Flutter', 'Node.js', 'CI/CD', 'AI & LLMs',
];

const allCategories = [
  {
    label: 'Languages',
    items: ['Go', 'C#', 'TypeScript', 'Dart', 'JavaScript', 'Python', 'Rust', 'Ruby', 'Bash', 'SQL', 'PL/SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    items: ['ASP.NET Core', 'Minimal APIs', 'Gin', 'MVC', 'Razor Pages', 'Node.js', 'SignalR', 'REST', 'gRPC', 'WebSocket', 'Dapper', 'FluentValidation', 'MediatR', 'Autofac'],
  },
  {
    label: 'Auth & Security',
    items: ['OAuth2', 'OpenID Connect', 'JWT', 'Entra ID', 'MSAL', 'Microsoft Graph', 'PKCE', 'Policy-Based Authorization', 'Multi-Tenancy'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Flutter', 'Angular', 'Material UI', 'Semantic UI', 'TanStack Query', 'React Hook Form', 'Highcharts', 'CKEditor', 'Astro', 'Vite', 'Tailwind', 'Sass', 'Framer Motion'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'Oracle', 'SQL Server', 'Redis', 'SQLite', 'PL/SQL', 'Dapper', 'Migrations', 'Metabase', 'MemoryPack', 'Event Sourcing'],
  },
  {
    label: 'Infrastructure',
    items: ['Podman', 'Docker', 'Puppet', 'Nginx', 'Linux', 'Windows Server', 'IIS', 'Windows Services', 'systemd', 'Quadlet', 'Kestrel', 'Vagrant', 'Terraform'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Cloudflare', 'Azure', 'GitHub Actions', 'Azure DevOps', 'JFrog Artifactory', 'NuGet', 'GHCR', 'CI/CD', 'SOPS', 'Restic', 'Backblaze B2'],
  },
  {
    label: 'AI & Automation',
    items: ['Claude', 'Copilot', 'RAG', 'MCP Servers', 'AI Agents', 'Skills', 'Instructions', 'Orchestration', 'Prompt Engineering', 'Embeddings'],
  },
  {
    label: 'Architecture',
    items: ['Clean Architecture', 'Modular Monolith', 'BFF Pattern', 'CQRS', 'Vertical Slices', 'Domain-Driven Design', 'Repository Pattern', 'Multi-Tenancy'],
  },
  {
    label: 'Observability',
    items: ['Serilog', 'Seq', 'OpenTelemetry', 'Structured Logging', 'Uptime Kuma', 'Health Checks'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Worktrees', 'Workspaces', 'Roslyn Analyzers', 'Code Generation', 'DocFX', 'MSBuild', 'Make', 'Bun', 'PowerShell', 'VS Code'],
  },
  {
    label: 'Testing',
    items: ['NUnit', 'xUnit', 'MSTest', 'NSubstitute', 'Testify', 'Mockito', 'Vitest', 'Testing Library', 'go-sqlmock', 'Coverlet', 'Integration Testing'],
  },
];

export function Technologies() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="technologies">
      <h2 className={styles.title}>{t('technologies.title')}</h2>

      <div className={styles.keyTechs}>
        {keyTechs.map((tech) => (
          <Badge key={tech} variant="prominent">{tech}</Badge>
        ))}
      </div>

      {expanded && (
        <div className={styles.categories}>
          {allCategories.map(({ label, items }) => (
            <div key={label} className={styles.category}>
              <h3 className={styles.categoryLabel}>{label}</h3>
              <div className={styles.grid}>
                {items.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className={styles.expandButton}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <>Show less <ChevronUp size={16} /></>
        ) : (
          <>See all technologies <ChevronDown size={16} /></>
        )}
      </button>
    </Section>
  );
}
