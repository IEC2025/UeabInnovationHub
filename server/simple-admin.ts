import fs from 'fs';
import path from 'path';
import { storage } from './storage';

// Simple JSON export function for form submissions
export async function exportFormSubmissions(): Promise<void> {
  try {
    console.log('\n=== BIEW 2025 Registration Export ===');
    
    const registrations = await storage.getBiewRegistrations();
    console.log(`Found ${registrations.length} registrations:`);
    
    // Create exports directory if it doesn't exist
    const exportsDir = path.join(process.cwd(), 'exports');
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir);
    }
    
    // Export as JSON
    const jsonFile = path.join(exportsDir, `biew-registrations-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(jsonFile, JSON.stringify(registrations, null, 2));
    
    // Export as CSV
    const csvHeaders = ['ID', 'Type', 'Full Name', 'Organization', 'Position', 'Email', 'Phone', 'Category', 'Participants', 'Booth Requirements', 'Additional Info', 'Status', 'Submitted Date'];
    const csvRows = registrations.map(reg => [
      reg.id,
      reg.registrationType,
      reg.fullName,
      reg.organizationName,
      reg.position,
      reg.email,
      reg.phone,
      reg.category,
      reg.participantCount || '',
      reg.boothRequirements || '',
      reg.additionalInfo || '',
      reg.status,
      new Date(reg.submittedAt).toLocaleString()
    ]);
    
    const csvContent = [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
      
    const csvFile = path.join(exportsDir, `biew-registrations-${new Date().toISOString().split('T')[0]}.csv`);
    fs.writeFileSync(csvFile, csvContent);
    
    console.log('\n📊 Summary:');
    console.log(`Total Registrations: ${registrations.length}`);
    console.log(`Delegations: ${registrations.filter(r => r.registrationType === 'delegation').length}`);
    console.log(`Exhibitions: ${registrations.filter(r => r.registrationType === 'exhibition').length}`);
    console.log(`Pending: ${registrations.filter(r => r.status === 'pending').length}`);
    console.log(`Contacted: ${registrations.filter(r => r.status === 'contacted').length}`);
    console.log(`Completed: ${registrations.filter(r => r.status === 'completed').length}`);
    
    console.log('\n📄 Files exported:');
    console.log(`- JSON: ${jsonFile}`);
    console.log(`- CSV: ${csvFile}`);
    
    // Display recent registrations
    console.log('\n📋 Recent Registrations:');
    const recentRegistrations = registrations.slice(0, 5);
    recentRegistrations.forEach((reg, index) => {
      console.log(`\n${index + 1}. Registration #${reg.id}`);
      console.log(`   Name: ${reg.fullName}`);
      console.log(`   Organization: ${reg.organizationName}`);
      console.log(`   Type: ${reg.registrationType.toUpperCase()}`);
      console.log(`   Email: ${reg.email}`);
      console.log(`   Phone: ${reg.phone}`);
      console.log(`   Status: ${reg.status}`);
      console.log(`   Submitted: ${new Date(reg.submittedAt).toLocaleString()}`);
      if (reg.boothRequirements) {
        console.log(`   Booth Requirements: ${reg.boothRequirements}`);
      }
      if (reg.additionalInfo) {
        console.log(`   Additional Info: ${reg.additionalInfo}`);
      }
    });
    
    console.log('\n===========================================\n');
    
  } catch (error) {
    console.error('Error exporting form submissions:', error);
  }
}

// Auto-export on server start
setTimeout(() => {
  exportFormSubmissions();
}, 3000); // Wait 3 seconds for database to be ready

export { exportFormSubmissions };